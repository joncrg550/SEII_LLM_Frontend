import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data-service/data.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  // list to hold the messages, ephemeral,needs to be pushed to database
  private chatMessages: string [] = [];
  private JSONResponse: any;
  private userID: any = this.dataService.getUserID();
  private chatID: any;

  //dependency injection for http client
  constructor(private http: HttpClient, private dataService: DataService) {}

  //endpoint for chat API
  private endpoint = 'http://127.0.0.1:5000/chat';

  getChatMessages(): string[] {
    return this.chatMessages;
  }

  createNewChat(): void {
    console.log('userid',this.userID)
    //create a new chat on the database
    this.chatMessages = [];
    this.dataService.addChatToUser(this.userID, this.chatMessages)
      .subscribe((response: any) => {
        console.log('Response:', response);
        this.chatID = response.chat_id;
      }, (error: any) => {
        console.error('Error:', error.response);
      });
  }

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
      this.http.post(this.endpoint, JSONMessage).toPromise()
      .then((data: any) => {
        // Print the response for debugging
        console.log(data);
        // Peel off the message from the 'response' field of the response
        this.JSONResponse = data.response;
        // Push this plus AI into the list of messages to display on the frontend.
        this.chatMessages.push("AI:" + this.JSONResponse);
        // push the updated chat and response to the database
        this.dataService.updateChat(this.chatID, this.chatMessages)
        console.log("chatID",this.chatID)
        console.log("chatMessages",this.chatMessages)
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
