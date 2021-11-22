import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserResponse } from 'src/app/models/interfaces/account.interface';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  currentPage = 'profile';
  user!: UserResponse;


  constructor(private route: ActivatedRoute,
    private accountService: AccountService,
    private authService: AuthService) { }

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
