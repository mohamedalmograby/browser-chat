import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ChatListComponent } from './Components/chat-list/chat-list.component';
import { ChatBodyComponent } from './Components/chat-body/chat-body.component';
import { ChatBoxComponent } from './Components/chat-box/chat-box.component';
import { UserPreviewComponent } from './Components/user-preview/user-preview.component';
import { MessageComponent } from './Components/message/message.component';
import { FormsModule } from '@angular/forms';
import { MessageHandler } from './common/MessageHandler';
import { UserHandler } from './common/UserHandler';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatListComponent,
    ChatBodyComponent,
    ChatBoxComponent,
    UserPreviewComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageHandler,UserHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
