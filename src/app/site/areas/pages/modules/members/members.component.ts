import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  areaUrl = ''

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.areaUrl = this.router.url.split('/')[2];
  }

}

