import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignupButtonClicked(email: string, password: string){
    this.authService.signUp(email,password).subscribe((res: HttpResponse<any>) => {
      console.log(res);
    })
  }

}
