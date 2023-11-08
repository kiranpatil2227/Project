import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import {  KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAuthenticate: boolean;
  constructor(private route:Router,private authService: AuthService,private keycloakservice:KeycloakService){
    this.isAuthenticate = this.authService.isLoggedIn();
    
  }
  showLoginAlert(){
    alert('Please login to access user details!!')
  }
  openReg(){
    this.route.navigate(['/form']);
  }
  loginWithKeycloak() {
    debugger;
    this.keycloakservice.login({ prompt: 'login' }).then(() => {
      // Redirect to the dashboard upon successful login
      //this.route.navigate(['/dashboard']);
    });
  }
  openRegistrationForm() {
    // Use Keycloak's login method with the registration URL
    this.keycloakservice.login({ idpHint: 'keycloak', action: 'register' });
  }

  userRoles: string[] = [];
  ngOnInit() {
      this.keycloakservice.isLoggedIn().then((isLoggedIn) => {
        if (isLoggedIn) {
          this.route.navigate(['/dashboard']);
        }
    
      });
    }
  }

