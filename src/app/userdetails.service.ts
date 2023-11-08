import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
private url='http://localhost:8082'
constructor(private http:HttpClient){}
getUser(){
  console.log('url working',this.url)
  return this.http.get<User[]>(`${this.url}/api/userdata`)
 
}
 getUserService(users:User[]){
  console.log('--employees-service--',users);
  return this.http.post(`${this.url}/api/userdata`,users);
 }
 
 getUserDataByUser(username: string): Observable<User[]> {
  console.log('user_in_service',username)
  return this.http.get<User[]>(`${this.url}/api/userdataByUser?username=${username}`);
}

getUserProfile(): Observable<any> {
  return this.http.get<any>(this.url);
}








updateUser(user: User): Observable<any> {
  const url = `${this.url}/api/userdata/${user.email}`;
  return this.http.put(url, user);
}
}

