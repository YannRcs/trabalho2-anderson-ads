import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  displaySidebar = false;
  usuario: string = null;

  constructor(private router: Router) {
  }

  navigate(url: string): void {
    this.router.navigateByUrl(url).then(() => this.displaySidebar = false);
  }

  showNav(): boolean {
    const ehTelaDeLogin = this.router.url.indexOf('login') > 0;
    if (this.usuario == null && !ehTelaDeLogin) {
      const u = localStorage.getItem('usuario_logado');
      if (u == null) {
        this.navigate('login');
        return ;
      }
      setTimeout(() => {
        this.usuario = u;
        this.displaySidebar = true;
      }, 500);
    }
    return !ehTelaDeLogin;
  }

  sair(): void {
    localStorage.removeItem('usuario_logado');
    this.navigate('login');
    this.displaySidebar = false;
    this.usuario = null;
  }
}
