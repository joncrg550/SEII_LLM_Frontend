import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatPageComponent } from 'src/app/components/Chat/chat-page/chat-page.component';
import { OpenAiService } from '../../open-ai.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  // list to hold the messages, ephemeral,needs to be pushed to database
  chatMessages: {}[] = [];
  lastMessage: any;
  JSONResponse: any;
  currentOwner?: ChatPageComponent;

  //dependency injection for http client
  constructor(private http: HttpClient) {}

  setOwner(object:ChatPageComponent){
    this.currentOwner = object;
  }

  //endpoint for chat API
  private endpoint = 'http://127.0.0.1:5000/chat';

  //function to send messages
  sendMessage(message: String)  {

    //if the message isn't the empty string
    if (message.trim() !== '') {

      //turn the string into a JSON object
      const JSONMessage = {
        text: message,
      }

      this.currentOwner?.getOpenAIService.getDataFromOpenAPI(message.toString());
      //print it for debugging
      console.log(JSONMessage)

      //push it to the front end for viewing
      this.chatMessages.push("You:" +  message)

      //post it to the API, and process the response
      this.http.post(this.endpoint, JSONMessage).toPromise()
      .then((data: any) => {
        // Print the response for debugging
        console.log(data);
        // Peel off the message from the 'response' field of the response
        this.JSONResponse = data.response;
        // Push this plus AI into the list of messages to display on the frontend.
        this.chatMessages.push("AI:" + this.JSONResponse);
        // this.chatMessages.push("AI:CODE:" + `
        // <html>
        //      <article>
        //     <h1>Article Heading</h1>
        //     </article>
        //  </html>
        //  `);

        
        this.lastMessage = "AI:" + this.JSONResponse;
        this.currentOwner?.getChatDisplay.startNewAIResponse(this.lastMessage);
        // this.chatMessages.push("AI:" + this.JSONResponse);
      })
      .catch((error: any) => {
        // Log the error to the console
        console.error('Error:', error);

        // Perform any other error handling here
        // For example, you can set a flag, display an error message, etc.
      });


    }
  }
}
