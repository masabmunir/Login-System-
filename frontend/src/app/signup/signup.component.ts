import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
//import { Router } from 'express';
import { Router } from '@angular/router';
import { UserdataService } from '../sharedservices/userdata.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup : FormGroup;
  constructor(private myFormBuilder:FormBuilder,
              private userService:UserdataService,
              private router:Router) { }

  ngOnInit(): void {
    this.formControls();
  
  }
  
  formControls() {
    this.signup = this.myFormBuilder.group({
      name:  ["", Validators.required],
      email: ["", Validators.required],
      role: ["", Validators.required],
      contact: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
 
  SaveData(){
    // console.log(this.signup.value);
     this.userService.adduser(this.signup.value).subscribe(
      (res)=>{
        this.router.navigateByUrl('/login');
        console.log("res",res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

//  getdata(){
//   this.userService.getuser().subscribe(res=>{
//     console.log(res);
//   })
//  }

}
