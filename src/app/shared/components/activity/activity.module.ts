import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ActivityComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ActivityComponent,
  ]
})
export class ActivityModule { }
