import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { ChatDisplayComponent } from 'src/app/components/Chat/chat-display/chat-display.component';
import { ChatInputComponent } from 'src/app/components/Chat/chat-input/chat-input.component';
import { OpenAiService } from '../../../open-ai.service';

@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  constructor(
    private router: Router,
    private chatService: ChatService,
    private openAIService: OpenAiService,
    ) { };

    @ViewChild(ChatInputComponent) chatInput!: ChatInputComponent;
    @ViewChild(ChatDisplayComponent) chatDisplay!: ChatDisplayComponent;

    ngOnInit(): void {
      this.chatService.setOwner(this);
    }

    get getOpenAIService(){
      return this.openAIService;
    }
    
    get getChatService(){
      return this.chatService;
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
}
