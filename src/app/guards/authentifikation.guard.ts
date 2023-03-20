import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentifikationGuard implements CanActivate {
  constructor(private authentifikator:AuthentificationService,private router:Router)
  {}
  canActivate():boolean{
    if(this.authentifikator.isLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(["login"]);
      return false;
    }
    
  }
}

  

