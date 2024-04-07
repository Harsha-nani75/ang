import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

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
data:any=[];
constructor( private router: Router,private http:HttpClient,private ls:LoginService){

}
ngOnInit(){
this.Ldata();
}
Ldata(){this.ls.dataChecking().subscribe(data => {
  console.log(data); 
});

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
