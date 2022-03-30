import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';
import {User} from 'src/app/types' ;

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  @Output() onReceiverIdChange = new EventEmitter<string>();

  @Input() users!:Array<User> ;
  
  constructor() { 
    console.log('llllllllllll');
    console.log(this.users);
    
    
  }


  ngOnInit(): void {
  }
  changeReceiverId(receiverId:string){
    this.onReceiverIdChange.emit(receiverId);
  }
}
