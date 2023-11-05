from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

#list to hold the sent chats for mockin
sentence_list = [      
        # "Dr. Fu is a great professor!",
       # "All SE-2 students are awesome!",
        #"This project is so fun!",
       # "Random choice can be fun!",
       # "Let's see which one gets picked."
       ]

#func to append sentences onto sentence list
def pushSentence(my_list,my_sentence):
    my_list.append(my_sentence)

@app.route('/')
def index():
    return render_template('index.html')

#route for the chat functionality
@app.route('/chat', methods=['POST'])
def chat():
    #get data from the request, print for debugging
    data = request.json
    print(data)
    text = data.get('text')
    
    # Assuming the function `generate_response_from_LLM` interacts with your model and returns a result.
    response = generate_response_from_LLM(text)
    
    return jsonify({
        'response': response
    })

def generate_response_from_LLM(text):
    #append the recieved message onto list
    pushSentence(sentence_list,text)
    #print each sentence for debugging
    for sentance in sentence_list:
        print(sentance)

    # Randomly choose a sentence
    chosen_sentence = random.choice(sentence_list)
    
    return f"Response from LLM: {chosen_sentence}"
   
if __name__ == "__main__":
    app.run(debug=True)
