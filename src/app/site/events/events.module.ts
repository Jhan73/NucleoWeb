import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventComponent } from './components/event/event.component';
import { EventsComponent } from './pages/events/events.component';


@NgModule({
  declarations: [
    EventComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
