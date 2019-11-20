import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { ChatService } from "./servicio/chat.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  chats: Observable<any[]>;
  constructor(private db: AngularFirestore,public chatService: ChatService) {
    this.chats = db.collection("chats").valueChanges();
  }

}
