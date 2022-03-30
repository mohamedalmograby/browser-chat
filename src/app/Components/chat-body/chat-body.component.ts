import { Component, Input, OnInit } from '@angular/core';
import {Message, User} from 'src/app/types';
import { MessageHandler } from 'src/app/common/MessageHandler';
import{ GlobalConstants } from 'src/app/common/GlobalConstants';
import { UserHandler } from 'src/app/common/UserHandler';

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent implements OnInit {
  @Input() receiverId! : string ;
  userId : string = GlobalConstants.currentUserId;
  receiver! : User ;
  messages : Array<Message> = []
  constructor(private messageHandler : MessageHandler , private userHandler :UserHandler) { 
    var currentComponent = this;


    if (window.addEventListener) {
      window.addEventListener("storage", ()=>{
        currentComponent.getMessages() ;
        
      }, false);
    }
  }

  ngOnInit(): void {
    
  }
  ngOnChanges():void {
    this.getMessages() ;
    this.receiver=this.userHandler.getUser(this.receiverId);
    console.log(this.receiver);
    
  }

  getMessages(){
    this.messages = this.messageHandler.getChatHistory(this.userId,this.receiverId);
  }

}
