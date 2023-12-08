import { Component } from '@angular/core';
import { HistoryService } from 'src/app/services/history-service/history.service';
@Component({
  selector: 'history-display',
  templateUrl: './history-display.component.html',
  styleUrls: ['./history-display.component.css']
})
export class HistoryDisplayComponent {
  constructor(private historyService: HistoryService) {}

  onInit(){
    console.log("init history display");
    this.historyService.getAllChats();
    this.historyService.getChat(3);
  }

  displayChatMessages() {
    return this.historyService.getChatMessages();
  }
}
