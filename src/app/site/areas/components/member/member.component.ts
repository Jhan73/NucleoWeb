import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {

  isContactInfoVisible = false;

  toggleContactInfo() {
    this.isContactInfoVisible = !this.isContactInfoVisible;
  }

}
