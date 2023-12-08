import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat-service/chat.service';
@Component({
  selector: 'history-display',
  templateUrl: './history-display.component.html',
  styleUrls: ['./history-display.component.css']
})
export class HistoryDisplayComponent {
  constructor(private chatService: ChatService) {}

  displayChatMessages() {
    return this.chatService.getChatMessages();
  }
}
