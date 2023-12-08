import { Component} from '@angular/core';
import { ChatService } from 'src/app/services/chat-service/chat.service';

@Component({
  selector: 'chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent {
  constructor(private chatService: ChatService) {}

  displayChatMessages() {
    return this.chatService.getChatMessages();
  }
}
