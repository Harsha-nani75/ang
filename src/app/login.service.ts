import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService { 
    
  constructor(private http:HttpClient) { }

    dataChecking():Observable<any[]>{
      return this.http.get<any[]>('../assets/login.json')
    }

}
