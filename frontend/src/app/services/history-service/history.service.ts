import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data-service/data.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  // list to hold the messages
  private chatMessages: string[] = [];
  private chats: any;
  private userID: any = this.dataService.getUserID();
  private chatID: any = 3;

  constructor(private dataService: DataService) {
    this.getChat(this.chatID);
  }


  getChatMessages(): string[] {
    console.log("get chat messages",this.chatMessages);
    return this.chatMessages;
  }

  getChat(chatID: number) {
    console.log("get chat ", this.chatMessages);
    const testID = 3;
    this.dataService.getChatByUserAndId(this.userID, testID).subscribe(
      (data: any) => {
        console.log("userID", this.userID)
        console.log("data", data)
        this.chatMessages = data.chat;
        this.chatID = data.id;
      },
      (error: any) => {
        console.error("Error retrieving chat:", error);
      }
    );
  }
  getAllChats() {
    this.dataService.getChatsByUser(this.userID).subscribe((data: any) => {
      console.log("get all chats",data);
      this.chats = data;
    });
  }
}
