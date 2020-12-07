import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {
  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  public navigateToHome() {
    this.router.navigate([{outlets: {micro: null}}]);
  }
}
