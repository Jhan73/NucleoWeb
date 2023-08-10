import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactacUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDataComponent } from './components/contact-data/contact-data.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    ContactFormComponent,
    ContactDataComponent
  ],
  imports: [
    CommonModule,
    ContactacUsRoutingModule
  ]
})
export class ContactUsModule { }
