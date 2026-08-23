import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isOpen: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    this.isOpen = !this.isOpen;
  }

  closeNav(): void {
    this.isOpen = false;
  }

  onChangeView(view: string): void {
    this.closeNav(); // Cierra el menú al seleccionar una opción

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
        this.router.navigate(['projects']);
        break;
      default:
        break;
    }
  }
}