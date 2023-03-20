import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private baseUrl:string = "https://localhost:7172/api/User/"
  constructor(private http:HttpClient) { }


  signUp(_user:any)
  {
    return this.http.post<any>(`${this.baseUrl}signup`, _user)
  }
  login(_user:any)
  {
    return this.http.post<any>(`${this.baseUrl}authenticate`, _user)
  }
  storeTokem(_tokenValue:string){
    localStorage.setItem("token",_tokenValue);
  }
  getToken()
  {
    return localStorage.getItem("token");
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem("token");
  }
}