import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialog-login-component',
  templateUrl: './dialog-login-component.component.html',
  styleUrls: ['./dialog-login-component.component.css']
})
export class DialogLoginComponentComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.authService.getRequestToken().subscribe(resp => {
      /*const navigationExtras: NavigationExtras = {
        queryParamsHandling: 'preserve',
        preserveFragment: true
      };*/
      this.authService.setLocalRequestToken(resp.request_token);
      window.open(`https://www.themoviedb.org/authenticate/${resp.request_token}?redirect_to=http://localhost:4200/loginsuccess`,"_self");
      
    });
  }

}
