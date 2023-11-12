import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  // list to hold the messages, ephemeral,needs to be pushed to database
  chatMessages: {}[] = [];
  JSONResponse: any;

  //dependency injection for http client
  constructor(private http: HttpClient) {}

  //endpoint for chat API
  private endpoint = 'http://127.0.0.1:5000/chat';

  //function to send messages
  sendMessage(message: String)  {

    //if the message isn't the empty string
    if (message.trim() !== '') {

      //turn the string into a JSON object
      const JSONMessage = {
        text: message
      }

      //print it for debugging
      console.log(JSONMessage)

      //push it to the front end for viewing
      this.chatMessages.push("You:" +  message)

      //post it to the API, and process the response
      this.http.post(this.endpoint, JSONMessage).toPromise().then((data:any) => {
        //print the response for debugging
        console.log(data);
        //peel off the message from the 'response' field of the response
        this.JSONResponse = data.response;
        //push this plus AI into the list of messages to display on the frontend.
        this.chatMessages.push("AI:" + this.JSONResponse)
      });

    }
  }
}
