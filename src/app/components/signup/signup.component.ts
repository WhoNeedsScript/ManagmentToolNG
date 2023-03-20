import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signUpForm:FormGroup|any;
  type:string ="password";
  passwordState:boolean = false;
  constructor(private fb:FormBuilder, private authentification:AuthentificationService,private router:Router){}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ["",Validators.required],
      password: ["",Validators.required],
      firstname: ["",Validators.required],
      lastname: ["",Validators.required],
      email: ["",Validators.required],
    })
  }

  hideShowPassword(){
    this.passwordState = !this.passwordState;
    this.passwordState ? this.type = "text" : this.type = "password";
  }

  onSignUp()
  {
    if(this.signUpForm.valid)
    {
      console.log(this.signUpForm.value);
      this.authentification.signUp(this.signUpForm.value)
      .subscribe({
        next:(res=>{
            alert(res.message)
            this.signUpForm.reset();
            this.router.navigate(["login"]);
          })
          ,error:(err=>{
            alert(err.message)
          })
      })
    }
    else{
      //throw error
      console.log("not value");
      this.validateAsllFormFields(this.signUpForm);
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
