import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat-service/chat.service';


@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  userMessage = '';

  onInit() {
    this.chatService.createNewChat();
  }

  constructor(private chatService: ChatService) {}

  sendMessage() {
    // Implement sending the message to the chat service here
    if (this.userMessage.trim() !== '') {
      // Call your chat service to send the message to the API
      this.chatService.sendMessage(this.userMessage);
      this.userMessage = '';
    }
  }

  newChat(){
    this.chatService.createNewChat();
  }
}
