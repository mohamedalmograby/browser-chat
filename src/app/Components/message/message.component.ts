import { Component, Input, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/GlobalConstants';
import {Message} from 'src/app/types' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()messageData! :Message ;
  userId = GlobalConstants.currentUserId;
  type : string = 'out';
  metaOgTitle! : string | null;
  LinkDomainName! : string | null;
  metaOgImage! : string | null;
  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {

  }

   isValidHttpUrl(input:string) {
    let url;
    
    try {
      url = new URL(input);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

  ngOnChanges():void {
    if(this.messageData.from==this.userId)this.type ='out';
    else this.type = 'in';

    if(this.isValidHttpUrl(this.messageData.content)){
      console.log('valid');
      
      this.preparePreviewLink() ;
    }

  }
  preparePreviewLink(){
    try {

      this.http.get(this.messageData.content , {responseType: "text"}).subscribe( (data:any) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(data, "text/html");
        this.metaOgTitle  = doc.querySelectorAll("meta[property='og:title']")[0].getAttribute('content');
        this.metaOgImage  = doc.querySelectorAll("meta[property='og:image']")[0].getAttribute('content');
        this.LinkDomainName = new URL(this.messageData.content).hostname;
        console.log(this.metaOgImage);
        

    });
    } catch (error) {
      
    }
  }
}
