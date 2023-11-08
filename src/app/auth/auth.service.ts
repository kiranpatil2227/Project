import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private Keycloakservice:KeycloakService){}
public isAuthenticate: boolean = false;
//private currentUserName: string='';
// setCurrentUserName(username: string): void {
//   this.currentUserName = username;
// }
// getCurrentUserName(): string {
//   console.log('current email_auth-',this.currentUserName);
//   return this.currentUserName;
// }
// getUsername(): string {
//   console.log('--',this.getUsername)
//   return this.Keycloakservice.getUsername();
   
// }

  setLoggedIn(value: boolean) {
    this.isAuthenticate = value;
  }
  isLoggedIn(): boolean {
    return this.isAuthenticate;
  }
  logout() {
    this.isAuthenticate = false;
    //this.currentUserName = '';
  }
}


