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
    const endpoint = 'your-api-endpoint';
  // #TODO rework this to something smarter.
    const noMessage = "Tell me I sent no message.";
    if (message.trim() !== '') {
      this.chatMessages.push({ text: message });
       // Simulate API call (replace with actual HTTP POST request)
    return this.http.post(endpoint, { message });
    }
    //#TODO rework this to something smarter.
    else return this.http.post(endpoint, {noMessage});
  }

  // Simulate receiving a response from the API (replace with actual API call)
  getResponse(): Observable<any> {
    // Replace with actual API call when implemented
    const response = 'This is a response from the API.';
    return of({ text: response });
  }
}
