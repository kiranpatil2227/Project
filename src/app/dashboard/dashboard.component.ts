import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserdataComponent } from '../userdata/userdata.component';
import { MatSidenav } from '@angular/material/sidenav';
import { KeycloakService } from 'keycloak-angular';
KeycloakService




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router,public dialog:MatDialog,private KeycloakService:KeycloakService) {}
  showProfile = false;

  toggleProfile() {
    this.showProfile = true;
  }
  closeProfile(){
    this.showProfile;
  }
  logout() {
    this.KeycloakService.logout();
  }
  isDialog=false;
  openRegister(){
    if(!this.isDialog){
      this.isDialog=true;
        const opendia= this.dialog.open(UserdataComponent,{
          height: '80%',
          width: '80%',
          position: { top: '0%', left: '10%' },
        });
        opendia.afterClosed().subscribe(() => {
          this.isDialog = false; 
        })   
    }
  }
 
  openProfile() {
    this.router.navigate(['/profile']);
  }
}
