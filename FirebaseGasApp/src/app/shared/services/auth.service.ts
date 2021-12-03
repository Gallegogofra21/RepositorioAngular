import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat'
import { Router } from "@angular/router";
import { FirebaseApp } from '@angular/fire/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data

  constructor(public readonly auth: AngularFireAuth){}
  

  // Sign in with Google
  async GoogleAuth() {
    
  }

  logout() {
    this.auth.signOut();
    // TODO sign out of offline app
  }  

}
