import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private keycloak: KeycloakService) {}

  canActivate(): Promise<boolean> {
    return this.keycloak.isLoggedIn().then((authenticated) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(['/login']); 
        return false;
      }
    });
  }
}
