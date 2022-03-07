import { Component, OnInit } from '@angular/core';
import { AuthLoginDto } from 'src/app/models/dto/auth-dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDto = new AuthLoginDto();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.authService.login(this.loginDto).subscribe(loginResult => {
      this.authService.setLocalRequestToken(loginResult.token);
      alert(`Te has logueado y tu token es ${loginResult.token}`)
    });
  }

}
