import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/interfaces/user.interface';


const COLLECTION_USERS = 'users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userList!: Observable<User[]>;

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      this.firestore.collection(COLLECTION_USERS).doc(res?.user?.uid)
      .set({ name: res.user?.displayName,
      email: res.user?.email,
      photo: res.user?.photoURL });
      localStorage.setItem('name', res.user?.displayName? res.user?.displayName: '');
      localStorage.setItem('photo', res.user?.photoURL? res.user?.photoURL:'');
      localStorage.setItem('uid', res.user?.uid? res.user?.uid: '');
    });
  }

  logout() {
    this.auth.signOut();
  }

  getUserList() {
    this.userList = this.firestore.collection<User>(COLLECTION_USERS).valueChanges();
  }

}
