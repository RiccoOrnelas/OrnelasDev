import { Component, OnInit, HostListener } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { TranslationService, Lang } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  showDiv = false;
  downIcon = faDownload;

  flags: { lang: Lang; emoji: string; label: string }[] = [
    { lang: 'pt', emoji: '🇧🇷', label: 'PT' },
    { lang: 'en', emoji: '🇺🇸', label: 'EN' },
    { lang: 'es', emoji: '🇪🇸', label: 'ES' }
  ];

  constructor(public ts: TranslationService) {}

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showDiv = window.innerWidth < 780;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  hideNavbar() {
    this.navbarOpen = false;
  }

  setLang(lang: Lang) {
    this.ts.setLang(lang);
  }
}
