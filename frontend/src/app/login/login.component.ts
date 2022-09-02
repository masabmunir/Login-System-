import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../sharedservices/userdata.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  submitted:false;
  constructor(private myformbuilder:FormBuilder,
              private router:Router,
              private userdata:UserdataService) { }

  ngOnInit(): void {
    this.formControls();
  }

  formControls() {
    this.loginForm = this.myformbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit(){     
    // this.userdata.getuser().subscribe(res=>{
    //   console.log(res);
    // })
    this.router.navigateByUrl('/info');
  }


}
