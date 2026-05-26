import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { GalleryItem } from '../../models/gallery-item.model';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-automations',
  templateUrl: './automations.component.html',
  styleUrl: './automations.component.css'
})
export class AutomationsComponent implements OnInit, OnDestroy {
  automations: GalleryItem[] = [];
  selectedItem: GalleryItem | null = null;
  showModal = false;

  private langSub!: Subscription;

  constructor(
    public ts: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.automations = this.ts.getAutomations();
    this.langSub = this.ts.lang$.subscribe(() => {
      this.automations = this.ts.getAutomations();
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  openModal(item: GalleryItem) {
    this.selectedItem = item;
    this.showModal = true;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    this.showModal = false;
    this.selectedItem = null;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}
