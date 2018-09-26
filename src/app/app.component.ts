import { Component } from '@angular/core';

import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message: Message;
  public messages: Message[];


  constructor() {
    this.message = new Message('', '../favicon.ico');
    this.messages = [
      new Message('Welcome to chatbot universe', '../favicon.ico', new Date())
    ];
  }
}
