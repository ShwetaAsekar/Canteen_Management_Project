import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router,Route, ActivatedRoute} from '@angular/router';
import { Login } from '../login';
import { LoginService} from '../login.service'; 
import { FormGroup,FormControl,Validators,AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login:Login=new Login();
    
     msg='';
     submitted=false;
     public loginForm:FormGroup
     emailid:string;
     password:string;
     
     
     constructor(private loginservice:LoginService,private router:Router,
     private formBuilder:FormBuilder,private route:ActivatedRoute) { }
 
     ngOnInit(): void
    {
      }
     
  LoginUser(){
       this.loginservice.LoginUser(this.login).subscribe(data=>{
         alert("Login successfully");
         this.router.navigate(['foods'])
       },
         error=>{
           console.log("Exception Occured..")
         this.msg="invalid emailid and password";
        }
       );
     }
   
  OnSubmit(){
    this.LoginUser();
    
  }
  

 
}
  