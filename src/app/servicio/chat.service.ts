import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { mensaje } from "../interfaces";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
@Injectable({
  providedIn: "root"
})
export class ChatService {
  // cro array de chats
  public chats: mensaje[] = [];
  private itemsCollection: AngularFirestoreCollection<mensaje>;
  public collection: mensaje;
  public usuario: any = {};
  // injecto el servicio
  constructor(
    private firebase: AngularFirestore,
    private angularFireAuth: AngularFireAuth
  ) {
    // escucha cambieos en el estado de la autentificación
    this.angularFireAuth.authState.subscribe(userState => {
      console.log("estado del usuario", userState);
      if (!userState) {
        return;
      }
      this.usuario.nombre = userState.displayName;
      this.usuario.uid = userState.uid;
      this.usuario.imagen = userState.photoURL;
    });
  }

  // funcion que carga mensajes

  cargarMensajes() {
    // obtengo mi coleccion // la colecccion es un objeto de firebase que contiene datos

    this.itemsCollection = this.firebase.collection<mensaje>("chats", (
      ref // ejemplo usuarios: habria todos los usuarios con sus datos
    ) => ref.orderBy("fecha", "asc").limitToLast(50));

    return this.itemsCollection
      .valueChanges() // value changes devuelve un obserbable que devuelve los datos del objeto(sin metadatos)
      .pipe(map(mensajes => (this.chats = mensajes)));
  }

  enviarMensaje(texto) {
    let mensaje: mensaje = {
      fecha: new Date().getTime(),
      nombre: this.usuario.nombre,
      mensaje: texto,
      uid: this.usuario.uid,
      imagen: this.usuario.imagen
    };
    return this.itemsCollection.add(mensaje);
  }
  login() {
    return this.angularFireAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider()
    );
  }
  logout() {
    this.usuario = {};
    this.angularFireAuth.auth.signOut();
  }
}
