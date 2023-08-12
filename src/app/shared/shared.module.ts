import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from '../layouts/layout/layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    MenuBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent,
    MenuBarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
