import { Component,ViewChild, Inject } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';
import { ChatPageComponent } from 'src/app/components/Chat/chat-page/chat-page.component';
import { ChatService } from 'src/app/services/chat-service/chat.service';


@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  constructor(
    @Inject(ChatPageComponent) private parent: ChatPageComponent,
    private chatService: ChatService
    ) {}

  onInit() {
    this.chatService.createNewChat();
  }

    userMessage = '';
    @ViewChild(NgxTypedJsComponent) typed!: NgxTypedJsComponent;


  sendMessage() {
    // Implement sending the message to the chat service here
    if (this.userMessage.trim() !== '') {
      // this.typed.stop();
      // Call your chat service to send the message to the API
      this.parent.getChatService.sendMessage(this.userMessage);
      this.parent.chatDisplay.stop();
      this.userMessage = '';
      //alert('test');
    }
  }

  newChat(){
    this.chatService.createNewChat();
  }
}
