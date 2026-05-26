import { Component, Input, Output, EventEmitter, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GalleryItem } from '../../models/gallery-item.model';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrl: './gallery-modal.component.css'
})
export class GalleryModalComponent {
  @Input() item: GalleryItem | null = null;
  @Input() show: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.show) this.close();
  }

  close() {
    this.closeModal.emit();
  }

  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
}
