import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {


  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  isAuthenticated():boolean{
    if(this.authService.isAuthenticated())
    {
      return true;
    }else{
      return false;
    }
  }

  logout(){

        localStorage.removeItem("token");
        this.router.navigate(["login"]);
  }

}
