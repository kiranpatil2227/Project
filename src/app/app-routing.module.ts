import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
import { UserdataComponent } from './userdata/userdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';




const routes: Routes = [
  {
    path:"", redirectTo:"/home",pathMatch:"full"
  },

  {
    path:"home",component:HomeComponent
  },

  {
    path:"userdata",component:UserdataComponent,canActivate:[AuthGuard]
  },
  {
    path:"dashboard",component:DashboardComponent,canActivate: [AuthGuard] 
  },
  {
    path:"profile",component:ProfileComponent
  },
{
  path:"edit-user",component:EditUserComponent
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
