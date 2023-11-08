import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserdetailsService } from '../userdetails.service';
import { Router } from '@angular/router';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../user';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 
  user: any;
  constructor(private authService: AuthService, private keycloak:KeycloakService, private userService: UserdetailsService,private router:Router,private dialog:MatDialog,private http: HttpClient) {}
 ngOnInit(){
  this.keycloak.isLoggedIn().then((authenticated) => {
    if (authenticated) {
      this.keycloak.loadUserProfile().then((profile) => {
        this.user = {
          username: profile.username,
          email: profile.email,
          first_name:profile.firstName,
          last_name:profile.lastName,
          id:profile.id
          // Add more user attributes as needed
        };
      });
    }
  });
}
  
  
 
    
  
  isDialog=false;
  openeditUser(){
        const dialogRef = this.dialog.open(EditUserComponent, {
          data: this.user, 
        });
        dialogRef.afterClosed().subscribe((editedUserData) => {
          if (editedUserData) {
           
            console.log('Edited User Data:', editedUserData);
      
          
            this.userService.updateUser(editedUserData).subscribe(
              (response) => {
                console.log('User data updated successfully:', response);
                this.user = editedUserData;
                console.log('con_pass check--',this.user)
              },
              (error) => {
                console.error('Error updating user data:', error);
              }
            );
          }
        });
    }
  }

