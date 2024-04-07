import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user_name = "Admin"
password:any = "Admin@123"
entered_user_name = "";
entered_password ="";
constructor( private router: Router){

}
ngOnInit(){

}

doLogin(){
  if(this.user_name != this.entered_user_name){
    alert("Please enter valid User name")
  }
  else if(this.password != this.entered_password){
    alert("Incorrect Password")
  }
  else{
    this.router.navigate(['/home-page'])
  }
}
}
