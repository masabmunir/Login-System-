import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../userModule/user.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url = environment.BASE_URL;

  constructor(private http:HttpClient) { }

  adduser(user:User){
    return this.http.post(this.url+"user/signUp",user);
  }

  getuser(){
    return this.http.get(this.url);
  }
}
