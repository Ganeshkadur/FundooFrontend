import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public logInForm!: FormGroup
  submitted: boolean = false
  
  constructor(public formBuilder: FormBuilder,public userService:UserService) {
   
   }

  ngOnInit(): void {
    this.logInForm=this.formBuilder.group({
     
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
     
    })
  }
  get loginControl(){return this.logInForm.controls;}
  handleLogin(){
    this.submitted=true
    if(this.logInForm.invalid)return
     const {email,password}= this.logInForm.value
     this.userService.userLogin({email:email,password:password}).subscribe(result=>{
      console.log(result);
      
     },
     error=>{
      console.log(error);
      
     })
  }
}
