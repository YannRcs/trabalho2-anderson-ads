import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  displaySidebar = false;
  usuario: string = null;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.displaySidebar = !this.displaySidebar;
  }

  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }

  showNav(): boolean {
    const showNav = this.router.url.indexOf('login') < 0;
    if (this.usuario == null && showNav) {
      setTimeout(() => {
        this.usuario = localStorage.getItem('usuarioLogado');
        this.displaySidebar = true;
      }, 500);
    }
    return showNav;
  }

  sair(): void {
    this.displaySidebar = false;
    localStorage.removeItem('usuarioLogado');
    this.usuario = null;
    this.navigate('login');
  }
}
