from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) #allow all origins for demo purposes


sentence_list = []

def push_sentence(my_list, my_sentence):
    my_list.append(my_sentence)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    text = data.get('text')
    
    response = generate_response_from_LLM(text)
    
    return jsonify({
        'response': response
    })

def generate_response_from_LLM(text):
    push_sentence(sentence_list, text)
    
    if sentence_list:
        chosen_sentence = random.choice(sentence_list)
    else:
        chosen_sentence = "No response available."
    
    return chosen_sentence

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
