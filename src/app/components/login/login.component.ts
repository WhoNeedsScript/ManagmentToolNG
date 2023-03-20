import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup|any;
  type:string ="password";
  passwordState:boolean = false;
  constructor(private fb:FormBuilder, private authentification:AuthentificationService, private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["",Validators.required],
      password: ["",Validators.required],
    })
  }

  hideShowPassword(){
    this.passwordState = !this.passwordState;
    this.passwordState ? this.type = "text" : this.type = "password";
  }

  onLogin()
  {
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);
      //send the objkect to database
      this.authentification.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message)
          this.loginForm.reset();
          this.authentification.storeTokem(res.token);
          this.router.navigate(["dashboard"]);
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }
    else{
      //throw error
      console.log("not value");
      this.validateAsllFormFields(this.loginForm);
      alert("Fehlende Eingaben")
    }
  }

  private validateAsllFormFields(formGroup:FormGroup)
  {
    Object.keys(formGroup.controls).forEach(
      field=>{
        const control = formGroup.get(field);
        if(control instanceof FormControl)
        {
          control.markAsDirty({onlySelf:true})
        }
        else if( control instanceof FormGroup)
        {
          this.validateAsllFormFields(control)
        }
      })
  }
}
