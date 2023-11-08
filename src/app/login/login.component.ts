// import { Component,OnInit } from '@angular/core';
// import { FormBuilder, FormGroup,Validators } from '@angular/forms';
// import { AuthService } from '../auth/auth.service';
// import { HttpClient } from '@angular/common/http';
// import Swal from 'sweetalert2';
// import { Router } from '@angular/router';
// import {  KeycloakService } from 'keycloak-angular';



// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//    public loginform! :FormGroup
//   constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient,private authService:AuthService,private keycloakservice:KeycloakService){}
// ngOnInit():void{
//   debugger;
//    this.loginform=this.formBuilder.group({
//     email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required],
      
//    });
  
//   }
// onSubmit(loginform:FormGroup) {
//   this.http.get<any>("http://localhost:8081/api/userdata").subscribe(response=>{
//     const user1=response.find((a:any)=>{
//       return a.email===this.loginform.value.email && a.password===this.loginform.value.password
//     });
    
//     if(user1){
//       this.authService.setLoggedIn(true);
//       this.authService.setCurrentUserEmail(this.loginform.value.email);
//       this.http.get<any>(`http://localhost:8081/api/userdata?email=${this.loginform.value.email}`).subscribe(response => {
//       });
//       Swal.fire("Login sucess");
//       this.loginform.reset();
//       this.router.navigate(['dashboard']);
//     }
//     else{
//       alert("email or password incorrect")
//       this.router.navigate(['login']);
//     }
//   })
// }
// onClear(){
//   this.loginform.reset();
// }


// }
