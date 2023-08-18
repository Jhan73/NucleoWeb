import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {

  isContactInfoVisible = false;
  originalMainContent: Node | null = null; // Almacena el contenido original del main

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {
    const mainSection = this.el.nativeElement.querySelector('main > div');
    const modal = this.el.nativeElement.querySelector('#myModal');
    const modalContent = modal.querySelector('.modal-content .image-container');
    const closeModalButton = modal.querySelector('.modal_close');

    this.originalMainContent = mainSection.cloneNode(true); // Guarda el contenido original

    this.renderer.listen(mainSection, 'click', () => {
      modalContent.innerHTML = ''; // Vaciar contenido anterior de modalContent
      while (mainSection.firstChild) {
        modalContent.appendChild(mainSection.firstChild);
      }
      this.renderer.setStyle(modal, 'display', 'block');
    });

    this.renderer.listen(closeModalButton, 'click', () => {
      this.renderer.setStyle(modal, 'display', 'none');
      if (this.originalMainContent) {
        mainSection.innerHTML = ''; // Vaciar el main original
        while (this.originalMainContent.firstChild) {
          mainSection.appendChild(this.originalMainContent.firstChild); // Restaurar el contenido original
        }
      }
    });

    this.renderer.listen('document', 'click', (event: Event) => {
      if (!modal.contains(event.target)) {
        this.renderer.setStyle(modal, 'display', 'none');
      }
    });
  }

  toggleContactInfo() {
    this.isContactInfoVisible = !this.isContactInfoVisible;
  }
}
