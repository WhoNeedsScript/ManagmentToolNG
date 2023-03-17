import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup|any;
  type:string ="password";
  passwordState:boolean = false;
  constructor(private fb:FormBuilder){}

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

  onSubmit()
  {
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);
      //send the objkect to database
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
