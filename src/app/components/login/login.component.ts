import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { sign } from 'crypto';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public logInForm!: FormGroup
  submitted: boolean = false
  
  constructor(public formBuilder: FormBuilder,public userService:UserService,public router:Router) {
   
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
       localStorage.setItem("token",result.message)
      if(result.success==true)
      {
        
        this.router.navigate(["dashboard/notes"])
      }
      
     },
     error=>{
      console.log(error);
     alert("Login Failed....!")
      
     })
  }

  handleNavigation(){
    this.router.navigate(["signup"])
    
  }
}
