import { Component, Input, OnInit } from '@angular/core';
import { MessageHandler } from 'src/app/common/MessageHandler';
import{ GlobalConstants } from 'src/app/common/GlobalConstants';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  @Input() receiverId! :string;
  newMessage = ""
  constructor(private messageHandler :MessageHandler) { 

  }

  ngOnInit(): void {
  }
  sendMessage(){
    var message = {
      from : GlobalConstants.currentUserId , 
      to : this.receiverId , 
      content : this.newMessage , 
      time : new Date().toLocaleString()
    }
    this.messageHandler.saveMessage(message);
    this.newMessage = "" ;
  }
}
