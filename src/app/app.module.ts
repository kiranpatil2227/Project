import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule} from '@angular/forms';
//import { LoginComponent } from './login/login.component';
import { UserdetailsService } from './userdetails.service';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserdataComponent } from './userdata/userdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth/auth.service';
import { FormsModule } from '@angular/forms'; 
import {MatIconModule} from '@angular/material/icon';
import { FilterPipe } from './filter.pipe'; 
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProfileComponent } from './profile/profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './keycloak_util/key-init';





@NgModule({
  declarations: [
    AppComponent,
   // FormComponent,
    HomeComponent,
    //LoginComponent,
    UserdataComponent,
    DashboardComponent,
    FilterPipe,
    ProfileComponent,
    EditUserComponent,
  
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    MatSortModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    NgxPaginationModule
    
  ],
  providers: [UserdetailsService,AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
  },
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
