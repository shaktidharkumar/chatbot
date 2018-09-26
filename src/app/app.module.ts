import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageFormComponent } from './message-form/message-form.component';

import { DialogflowService } from './dialogflow.service';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DialogflowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
