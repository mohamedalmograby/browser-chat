import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router'
import{ GlobalConstants } from 'src/app/common/GlobalConstants';
import { UserHandler } from 'src/app/common/UserHandler';
import {User} from 'src/app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  receiverId : string = "";
  users! : Array<User> ;
  constructor(
    private route: ActivatedRoute ,
    private router:Router ,
    private userHandler : UserHandler
     ) {
    var userId = this.route.snapshot.paramMap.get('id');
    
    if(userId=="0"){
      userId = this.userHandler.createUser() ; 
      this.router.navigate(['/home' , userId])
    }
    GlobalConstants.currentUserId = userId || "" ;
    this.users=userHandler.getAllUsers();

    if (window.addEventListener) {
      window.addEventListener("storage", ()=>{
        this.users=userHandler.getAllUsers();        
      }, false);
    }
  }
  changeReceiverId(receiverId:string){
    this.receiverId=receiverId;    
  }

  ngOnInit(): void {
  }

}
