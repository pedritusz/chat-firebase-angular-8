import { Component, OnInit, ElementRef } from '@angular/core';
import { ChatService } from 'src/app/servicio/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  mensaje: string;
  mensajes: string[];
  MensajesDom: HTMLElement;
  constructor(public servicio: ChatService) {
    this.servicio.cargarMensajes().subscribe(() => {
      setTimeout(() => {
        this.MensajesDom.focus();
      }, 20);
    });
  }
  ngOnInit() {
    this.MensajesDom = document.getElementById('app-mensajes');
  }
  enviar() {
    if (this.mensaje.length < 1) {
    } else {
      this.servicio.enviarMensaje(this.mensaje).then(x => (this.mensaje = ' '));
    }
  }
}
