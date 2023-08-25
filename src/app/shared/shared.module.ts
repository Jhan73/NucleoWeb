import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from '../layouts/layout/layout.component';
import { RouterModule } from '@angular/router';
import { ActivityDetailsComponent } from './pages/activity-details/activity-details.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';



@NgModule({
  declarations: [
    LayoutComponent,
    MenuBarComponent,
    FooterComponent,
    ActivityComponent,
    ActivityDetailsComponent,
    ActivityListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent,
    MenuBarComponent,
    FooterComponent,
    ActivityComponent,
    ActivityDetailsComponent,
    ActivityListComponent,
  ]
})
export class SharedModule { }
