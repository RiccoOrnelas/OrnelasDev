import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  navbarOpen = false
  showDiv = false;
  downIcon = faDownload
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showDiv = window.innerWidth < 780; // Exibir a div se a largura da tela for maior que 768 pixels
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  hideNavbar() {
    this.navbarOpen = false
  }

}