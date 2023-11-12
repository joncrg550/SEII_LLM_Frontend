import { Component, Input } from '@angular/core';
import { ChatService } from 'src/app/services/chat-service/chat-service.service';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent {
  constructor(private chatService: ChatService) {}
  
  get chatMessages() {
    return this.chatService.chatMessages;
  }
}
