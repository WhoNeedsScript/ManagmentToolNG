import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class MamagmentToolService {

  constructor() { }

  public login(_username:string,_password:string): User{
    const user = new User(
      1,
      "admin",
      "admin",
      "magnus",
      "koch",
      "magnus96@live.de"
    );
    if (user.username === _username && user.password === _password)
    {
      return user;
    }
    return new User(-1);
  }
}
