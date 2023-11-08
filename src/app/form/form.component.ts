import { Component } from '@angular/core';
import { FormGroup,FormControl ,Validators,FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserdetailsService } from '../userdetails.service';
import { User } from '../user';
import { Router } from '@angular/router';



// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent {
//   //user: User = {
//     //first_name: '',
//     //last_name: '',
//     //email: '',
//    // gender:'',
//    // phone: '',
//    // dob: new Date(),
//     //password: '',
//     //confpassword: '',
//   };
//   userdata:any;
//   //userArray:User[]=[]
//   addUser!:FormGroup;
// constructor(private fb:FormBuilder,private userservice:UserdetailsService,private router:Router){
//   this.addUser=this.fb.group({
//     first_name:new FormControl('',Validators.compose([Validators.required,Validators.minLength(4)])),
//     last_name:new FormControl('',Validators.required),
//     email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
//     phone:new FormControl('',Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
//     dob:new FormControl('',Validators.required),
//     gender:new FormControl('',Validators.required),
//     password:new FormControl('',Validators.required),
//     confpassword:new FormControl('',Validators.required)
//   },
  
//   {
//     validators:this.passwordMatch('password','confpassword')
//   }
//   );
// }
// get war(){
// return this.addUser.controls;
// }

// passwordMatch(password:any,confpassword:any){
//  return(form:FormGroup)=>{
//   const passwordcontrol=form.controls[password];
//   const conpasswordcontrol=form.controls[confpassword];
//   if(conpasswordcontrol.errors && !conpasswordcontrol.errors['passwordMatch']){
//     return;
//  }
//  if(passwordcontrol.value!==conpasswordcontrol.value){
//   conpasswordcontrol.setErrors({passwordMatch:true})
//  }
//  else{
//   conpasswordcontrol.setErrors(null)
//  }
// }
//   }
//   saveuser(usedata:any){
   
//      this.userdata={
//       first_name:this.addUser.value.first_name ? this.addUser.value.first_name:'',
//       last_name:this.addUser.value.last_name ? this.addUser.value.last_name:'',
//       email:this.addUser.value.email ? this.addUser.value.email:'',
//       phone:this.addUser.value.phone ? this.addUser.value.phone:'',
//       dob:this.addUser.value.dob ? this.addUser.value.dob:'',
//       gender:this.addUser.value.gender ? this.addUser.value.gender:'',
//       password:this.addUser.value.password ? this.addUser.value.password:'',
//       confpassword:this.addUser.value.confpassword ? this.addUser.value.confpassword:''
//     }
//     //console.log('saveuser-',userdata);
//     //this.userArray.push(userdata)
//     //console.log('user array-',this.userArray)
//     this.userservice.getUserService(this.userdata).subscribe((result:any)=>{
//       console.log('--result--',result);
      
//      })
//   }
  
//   submitForm(){
//     debugger
//     if (this.addUser.valid) {
//       this.user = this.addUser.value;
//       console.log('Submitted User Data:', this.user);
//       this.saveuser(this.user); 
//       Swal.fire('Registration Success!!')
//       this.addUser.reset();
//        this.router.navigate(['login']);
//     }
    
//   }

//   clearForm() {
//     this.addUser.reset();
//   }
  
// }

