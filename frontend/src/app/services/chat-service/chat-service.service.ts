import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chatMessages: { text: string }[] = [];
  constructor(private http: HttpClient) {}
  // Simulate sending a message to the API (replace with actual API endpoint)
  sendMessage(message: string): Observable<any> {
  // Replace 'your-api-endpoint' with the actual API endpoint
    const endpoint = 'http://127.0.0.1:5000/chat';
    //if message !empty, Package it as JSON and prepend sender, #TODO factor out sender somewhere else
    if (message.trim() !== '') {
      this.chatMessages.push({ text: "You:" + message });
      const modifiedMessage = {
        text: message,
      };
      //print for debugging
      console.log(modifiedMessage)
      //use fetch API
      fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(modifiedMessage)
    }).then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      console.log("DEBUG" + response.json)
      return response.json(); // This parses the response as JSON
  })
  .then(data => {
      // `data` now contains the response data as a JavaScript object
      this.chatMessages.push();
      console.log('Response data:', data);

      // You can perform further actions with `data` here
  })
  .catch(error => {
      // Handle errors, such as network issues or non-successful responses
      console.error('Error:', error);
  });
       // Simulate API call (replace with actual HTTP POST request)
       return this.http.get(endpoint,  JSON.parse('response'));
    }

    else return this.http.post(endpoint,  JSON.stringify("This Shouldn't happen"));
}
}
