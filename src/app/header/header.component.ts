import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchText: string = '';
  constructor(private router: Router) {}

  myFunction() {
    const navbarNav = document.getElementById('navbarNav');
    if (navbarNav) {
      navbarNav.classList.toggle('show');
    }
  }

  // Fermer le menu déroulant si l'utilisateur clique en dehors de celui-ci
  windowOnClick(event: MouseEvent) {
    if (
      !(event.target instanceof Element) ||
      !event.target.matches('.navbar-toggler')
    ) {
      const dropdowns = document.getElementsByClassName('.navbar-toggler');
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  ngOnInit() {
    window.addEventListener('click', this.windowOnClick);
  }

  ngOnDestroy() {
    window.removeEventListener('click', this.windowOnClick);
  }

  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue;
    // console.log(searchValue);
    console.log(this.searchText);
  }
}
