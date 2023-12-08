import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from 'src/app/services/data-service/data.service';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { ChatDisplayComponent } from 'src/app/components/Chat/chat-display/chat-display.component';
import { ChatInputComponent } from 'src/app/components/Chat/chat-input/chat-input.component';


@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService, private chatService: ChatService) { }

    @ViewChild(ChatInputComponent) chatInput!: ChatInputComponent;
    @ViewChild(ChatDisplayComponent) chatDisplay!: ChatDisplayComponent;

    ngOnInit(): void {
      this.chatService.setOwner(this);
    }

    get getChatService(){
      return this.chatService;
    }

  goToHome(): void {
    this.router.navigate(['/chat']);
  }


    get getChatDisplay(){
      return this.chatDisplay;
    }
    

  goToSettings(): void {
    this.router.navigate(['/settings']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToHistory(): void {
    this.router.navigate(['/history']);
  }

  signOut(): void {
    this.dataService.setUserID(null);
    console.log('User signed out successfully!');
    this.router.navigate(['/login']);
  }
}
