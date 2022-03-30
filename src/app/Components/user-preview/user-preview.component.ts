import { Component, Input,Output, OnInit ,EventEmitter} from '@angular/core';
import {User} from 'src/app/types' ;
@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {

  @Output() onReceiverIdChange = new EventEmitter<string>();

  @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

  changeReceiverId(){
    this.onReceiverIdChange.emit(this.user.id);
  }
}
