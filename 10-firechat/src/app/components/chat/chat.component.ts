import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  message: string = "";
  element: any;

  constructor(public _chatService: ChatService) {
    this._chatService.loadMessages().subscribe(() => {
      setTimeout(
        () => this.element.scrollTop = this.element.scrollHeight, 20)
    });
    console.log(_chatService)
  }

  ngOnInit(){
    this.element = document.getElementById('app-mensajes');
  }

  sendMessage(){
    if(this.message.length === 0) return;
    this._chatService.addMessage(this.message)
      .then(() => this.message = "")
      .catch((err) => console.error('Error!!', err));
  }
}
