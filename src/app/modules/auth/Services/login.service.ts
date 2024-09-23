import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
export interface User {
  username: string;
  password: string;
  // Add more fields as needed
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://dummyjson.com/auth/login'
  httpClient = inject(HttpClient)

  Login(obj:User){
    return this.httpClient.post(this.url,obj)
    .toPromise()
  }
}
