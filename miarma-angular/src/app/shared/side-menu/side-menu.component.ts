import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  currentPage = 'profile';
  //user!: UserResponse;


  constructor(private route: ActivatedRoute,
    /*private accountService: AccountService,
    private authService: AuthService*/) { }

  ngOnInit(): void {
    console.log(this.route.url);
    /*this.accountService.getUser().subscribe(res => {
      this.user= res;
    })*/
  }

  /*logout() {
    this.authService.logout();
  }*/

}
