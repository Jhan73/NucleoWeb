import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AreaComponent } from './pages/area/area.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';
import { EstrategiasComponent } from './pages/estrategias/estrategias.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';


@NgModule({
  declarations: [
    AreaComponent,
    OrganigramaComponent,
    MiembrosComponent,
    EstrategiasComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    AreasRoutingModule
  ]
})
export class AreasModule { }
