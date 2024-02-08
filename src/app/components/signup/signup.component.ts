import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
public signupForm!: FormGroup
  submitted: boolean = false

  constructor(public formBuilder :FormBuilder,public userService:UserService,public router:Router) { 
    
  }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    })
  }
  get control(){return this.signupForm.controls;}

  handelRegistartion(){
    this.submitted = true
    if(this.signupForm.invalid)return
    const {firstName,lastName,email,password}=this.signupForm.value
    // console.log(control);
    this.userService.userSignup({firstName,lastName,email:email,password:password}).subscribe(result=>{
      console.log(result);
      
     },
     error=>{
      console.log(error);
      
     })
  }
  Navigatetologin(){
    this.router.navigate(["login"])
  }

}
