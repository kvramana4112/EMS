import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  employees  from '../../../../src/app/employees.json';
import { compileComponentFromRender2 } from '@angular/compiler/src/render3/view/compiler';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})



export class LoginComponent implements OnInit {

  tmp:boolean=true
  loginCheck : boolean = false;
  uname: any ;
  pwd: String;
  public  employeList : {name:string, username:string , password : String} []   = employees;
    

  constructor(@Inject(Router) private route) {
  
    
  }

  function1(){
   
    this.employeList.find(element=> {
    
     if(this.uname == element.username && this.pwd== element.password){
       this.loginCheck = true;
     }
    })
    if(this.loginCheck == true) {
      localStorage.setItem("username", this.uname);
      this.route.navigateByUrl("dashboard");
    }else{
      window.alert("username/password is incorrect");
      this.route.navigateByUrl("login");
    }


}

  ngOnInit(): void {
  }
  
}
