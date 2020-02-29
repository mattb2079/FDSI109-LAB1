import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from "angularfire2/firestore";
import { map } from "rxjs/operators";
import { firestore } from "firebase";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  messages: Observable<Message[]>;
  messageCollection : AngularFirestoreCollection<Message>; // pipeline to Firebase collection (table)

  constructor(private fb: AngularFirestore) {
    this.messageCollection = fb.collection<Message>("posts"); // open the pipeline
  }

  public saveMessage(message: Message){
    
    var item = Object.assign({}, message);
    this.messageCollection.add(item);
  }

  retrieveMessagesFromDB(){
    this.messages = this.messageCollection.valueChanges();
  }

  public getAllMessages(){
    this.retrieveMessagesFromDB(); // fill the array
    return this.messages; // return the array
  }
}
