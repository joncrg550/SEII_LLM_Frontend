import { AfterViewInit, Component, Directive, ViewChild, ElementRef, OnInit, SimpleChange, Inject} from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';
// import { ChatService } from 'src/app/services/chat-service/chat.service';
import { ChatPageComponent } from 'src/app/components/Chat/chat-page/chat-page.component';

@Component({
  selector: 'chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css'],
  animations: [

  ],
})

export class ChatDisplayComponent implements AfterViewInit, OnInit {

  constructor(
    @Inject(ChatPageComponent) private parent: ChatPageComponent
    ) {}

  name: any;
  name2: any[] = ['test me now'];

  @ViewChild('someInput') someInput!: ElementRef;
   @ViewChild(NgxTypedJsComponent) typed!: NgxTypedJsComponent;

   ngOnChanges()	{
   }
   ngOnInit() {
   }
   ngAfterViewInit() {
   }

  startNewAIResponse(message:string){
    this.typed.destroy();
    this.typed.startDelay=1000;
    this.typed.typeSpeed=50;
    this.typed.strings=[message];
    this.typed.loop = true;
    this.typed.ngAfterViewInit();
  }


    alter(){
      if(this.typed){
      this.typed.destroy();
      this.typed.stringsElement
      this.typed.strings=['Teagan', 'Tinsley'];
      this.typed.loop = true;
      this.typed.ngAfterViewInit();
      }
    }

    start(){
      this.typed.start();
    }
    stop(){
      this.typed.stop();
    }
    destroy(){
      this.typed.destroy();
    }
    rest(){
      this.typed.doReset();
    }

   get chatMessages() {
    this.name = this.parent.getChatService.lastMessage;
    return this.parent.getChatService.chatMessages;
  }
}