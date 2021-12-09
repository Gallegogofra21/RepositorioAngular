import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  currentPage = 'profile';
  user!: UserResponse;


  constructor(private route: ActivatedRoute
    //private accountService: AccountService,
    //private authService: AuthService
    ) { }

  ngOnInit(): void {
    console.log(this.route.url);
    this.accountService.getUser().subscribe(res => {
      this.user= res;
    })
  }

  logout() {
    this.authService.logout();
  }

}
