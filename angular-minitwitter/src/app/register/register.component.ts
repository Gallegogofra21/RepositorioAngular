import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RegisterDto, RegisterResponse } from '../models/interfaces/register.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerDto = new RegisterDto();
  registerResponse!: RegisterResponse;
  form = new FormGroup({
    username: new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doRegister() {
    this.registerDto.email = this.form.get('email')?.value;
    this.registerDto.username = this.form.get('username')?.value;
    this.registerDto.password = this.form.get('password')?.value;
    this.authService.register(this.registerResponse).subscribe(res => {
      this.authService.setLocalRequestToken(res.token);
      window.open(`${environment.apiBaseUrl}/tweets/all`);
    });
  }

}
