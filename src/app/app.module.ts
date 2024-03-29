import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './servicio/chat.service';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
