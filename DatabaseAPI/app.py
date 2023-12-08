from flask import Flask, jsonify, request
from flask_cors import CORS
# import psycopg2
import psycopg2
# import psycopg2_binary as psycopg2
from psycopg2.extras import Json
import hashlib
import json
from json import JSONDecodeError


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) #allow all origins for demo purposes

# PostgreSQL connection configuration
db_config = {
    'dbname': 'SEII_LLM_Frontend',
    'user': 'postgres',
    'password': 'chatPassword123!',
    'host': 'postgres',  
    'port': '5432'
}

def get_db_connection():
    conn = psycopg2.connect(**db_config)
    return conn

# Password hashing function
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()


@app.route('/users/add', methods=['POST'])
def add_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        hashed_password = hash_password(password)
        cursor.execute('INSERT INTO users (username, password_hash) VALUES (%s, %s) RETURNING user_id',
                       (username, hashed_password))
        user_id = cursor.fetchone()[0]
        conn.commit()
        
        user_data = {
            'user_id': user_id,
            'username': username,
            'password': password,
            'hashed_password': hashed_password
        }
        
        return jsonify(user_data), 201
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user_by_id(user_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('SELECT * FROM users WHERE user_id = %s', (user_id,))
        user = cursor.fetchone()
        if user:
            user_data = {
                'user_id': user[0],
                'username': user[1]
            }
            return jsonify(user_data), 200
        else:
            return jsonify({'message': 'User not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()
        
@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    new_username = data.get('username')
    new_password = data.get('password')

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        if new_username:
            cursor.execute('UPDATE users SET username = %s WHERE user_id = %s',
                           (new_username, user_id))

        if new_password:
            hashed_password = hash_password(new_password)
            cursor.execute('UPDATE users SET password_hash = %s WHERE user_id = %s',
                           (hashed_password, user_id))

        conn.commit()
        return jsonify({'message': 'User updated successfully'}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('DELETE FROM users WHERE user_id = %s', (user_id,))
        conn.commit()
        return jsonify({'message': 'User deleted successfully'}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/users/verify', methods=['POST'])
def verify_credentials():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    # Log the username and password
    print(f"Username: {username}")
    print(f"Password: {password}")
    
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('SELECT user_id, password_hash FROM users WHERE username = %s', (username,))
        user_data = cursor.fetchone()

        if user_data:
            user_id = user_data[0]
            hashed_password = hash_password(password)
            if user_data[1] == hashed_password:
                return jsonify({'valid': True, 'user_id': user_id}), 200
            else:
                return jsonify({'valid': False}), 200
        else:
            return jsonify({'valid': False}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/chats/add', methods=['POST'])
def add_chat_to_user():
    data = request.get_json()
    user_id = data.get('user_id')
    chat_content = data.get('chat_content')

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('INSERT INTO chats (user_id, chat_content) VALUES (%s, %s) RETURNING chat_id',
                       (user_id, chat_content))
        chat_id = cursor.fetchone()[0]
        conn.commit()
        return jsonify({'chat_id': chat_id}), 201
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()



@app.route('/chats/<int:chat_id>/user/<int:user_id>', methods=['PUT'])
def update_chat(chat_id, user_id):
    data = request.get_json()
    new_chat_content = data.get('new_chat_content')

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('UPDATE chats SET chat_content = %s WHERE chat_id = %s AND user_id = %s',
                       (new_chat_content, chat_id, user_id))
        conn.commit()
        return jsonify({'message': 'Chat updated successfully'}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()


@app.route('/chats/<int:chat_id>/user/<int:user_id>', methods=['GET'])
def get_chat_by_id_and_user(chat_id, user_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('SELECT * FROM chats WHERE chat_id = %s AND user_id = %s', (chat_id, user_id))
        chat = cursor.fetchone()
        if chat:
            try:
                chat_data = {
                    'chat_id': chat[0],
                    'user_id': chat[1],
                    'chat_content': chat[2]
                }
                return jsonify(chat_data), 200
            except JSONDecodeError as je:
                return jsonify({'error': f'Invalid JSON format: {str(je)}'}), 400
        else:
            return jsonify({'message': 'Chat not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()


@app.route('/chats/user/<int:user_id>', methods=['GET'])
def get_chats_by_user(user_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('SELECT * FROM chats WHERE user_id = %s', (user_id,))
        chats = cursor.fetchall()
        chats_data = []
        for chat in chats:
            chat_data = {
                'chat_id': chat[0],
                'user_id': chat[1],
                'chat_content': json.loads(chat[2])
            }
            chats_data.append(chat_data)
        return jsonify(chats_data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()
        
@app.route('/user_settings/add', methods=['POST'])
def set_user_settings():
    data = request.get_json()
    user_id = data.get('user_id')
    temperature = data.get('temperature')
    typing_speed = data.get('typing_speed')

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('INSERT INTO user_settings (user_id, temperature, typing_speed) '
                       'VALUES (%s, %s, %s) ON CONFLICT (user_id) DO UPDATE '
                       'SET temperature = %s, typing_speed = %s',
                       (user_id, temperature, typing_speed, temperature, typing_speed))
        conn.commit()
        return jsonify({'message': 'User settings updated successfully'}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/user_settings/<int:user_id>', methods=['GET'])
def get_user_settings(user_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('SELECT * FROM user_settings WHERE user_id = %s', (user_id,))
        settings = cursor.fetchone()
        if settings:
            settings_data = {
                'user_id': settings[0],
                'temperature': settings[1],
                'typing_speed': settings[2]
            }
            return jsonify(settings_data), 200
        else:
            return jsonify({'message': 'User settings not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()




@app.route('/user_settings/temperature/<int:user_id>', methods=['PUT'])
def set_temperature(user_id):
    data = request.get_json()
    temperature = data.get('temperature')

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('INSERT INTO user_settings (user_id, temperature) '
                       'VALUES (%s, %s) ON CONFLICT (user_id) DO UPDATE SET temperature = %s',
                       (user_id, temperature, temperature))
        conn.commit()
        return jsonify({'message': 'Temperature setting updated successfully'}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/user_settings/temperature/<int:user_id>', methods=['GET'])
def get_temperature(user_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('SELECT temperature FROM user_settings WHERE user_id = %s', (user_id,))
        temperature = cursor.fetchone()
        if temperature:
            return jsonify({'temperature': temperature[0]}), 200
        else:
            return jsonify({'message': 'Temperature not found for this user'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/user_settings/typing_speed/<int:user_id>', methods=['PUT'])
def set_typing_speed(user_id):
    data = request.get_json()
    typing_speed = data.get('typing_speed')

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('INSERT INTO user_settings (user_id, typing_speed) '
                       'VALUES (%s, %s) ON CONFLICT (user_id) DO UPDATE SET typing_speed = %s',
                       (user_id, typing_speed, typing_speed))
        conn.commit()
        return jsonify({'message': 'Typing speed setting updated successfully'}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/user_settings/typing_speed/<int:user_id>', methods=['GET'])
def get_typing_speed(user_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('SELECT typing_speed FROM user_settings WHERE user_id = %s', (user_id,))
        typing_speed = cursor.fetchone()
        if typing_speed:
            return jsonify({'typing_speed': typing_speed[0]}), 200
        else:
            return jsonify({'message': 'Typing speed not found for this user'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888)                