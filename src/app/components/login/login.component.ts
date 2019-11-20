import { Component } from '@angular/core';
import { ChatService } from 'src/app/servicio/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private chatService: ChatService,
    private routes: Router
  ) { }

ingresar(){
  this.chatService.login()
}

}
