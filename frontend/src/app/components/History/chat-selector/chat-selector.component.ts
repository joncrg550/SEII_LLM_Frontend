import { Component } from '@angular/core';
import { HistoryService } from 'src/app/services/history-service/history.service';
@Component({
  selector: 'chat-selector',
  templateUrl: './chat-selector.component.html',
  styleUrls: ['./chat-selector.component.css']
})
export class ChatSelectorComponent {
  constructor(private historyService: HistoryService) {}

  displayChats() {
    return this.historyService.getAllChats();
  }
}
