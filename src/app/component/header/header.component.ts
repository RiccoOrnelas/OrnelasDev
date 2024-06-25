import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navbarOpen = false
  showDiv = false;
  downIcon = faDownload


  constructor() { }

  ngOnInit() {
    this.onResize()
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showDiv = window.innerWidth < 780;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  hideNavbar() {
    this.navbarOpen = false
  }

}