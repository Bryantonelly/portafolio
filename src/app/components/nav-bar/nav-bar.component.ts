import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onChangeView(view: string){
    switch (view) {
      case '00':
        this.router.navigate(['home']);
        break;
      case '01':
        this.router.navigate(['about-me']);
        break;
      case '02':
        this.router.navigate(['skills']);
        break;
      case '03':
        this.router.navigate(['experience']);
        break;
      case '04':
        this.router.navigate(['contact']);
        break;
      default:
        break;
    }
  }
}
