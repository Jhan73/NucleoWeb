import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  areaUrl: string = ''
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.areaUrl = this.router.url.split('/')[2];
  }
  isFlipped = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
