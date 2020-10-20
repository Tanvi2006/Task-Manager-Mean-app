import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLoginClick(email: string, password: string){
    this.authService.login(email,password).subscribe((res: HttpResponse<any>) => {
      if(res.status === 200){
        // we have logged in successfully
        this.router.navigate(['/lists']); 
      }
      
      console.log(res);
    })
  }

}
