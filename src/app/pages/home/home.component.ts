import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openEmail(): void {
    const user = 'bryan.antonelly.villegas.cuba';
    const domain = 'gmail.com';
    window.location.href = `mailto:${user}@${domain}`;
  }
}
