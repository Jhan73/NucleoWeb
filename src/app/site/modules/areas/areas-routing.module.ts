import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreaComponent } from './pages/area/area.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';
import { EstrategiasComponent } from './pages/estrategias/estrategias.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'pmo',
    component: AreaComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganigramaComponent},
      {path: 'miembros', component: MiembrosComponent},
      {path: 'estrategias', component: EstrategiasComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'investigacion',
    component: AreaComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganigramaComponent},
      {path: 'miembros', component: MiembrosComponent},
      {path: 'estrategias', component: EstrategiasComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'industrial',
    component: AreaComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganigramaComponent},
      {path: 'miembros', component: MiembrosComponent},
      {path: 'estrategias', component: EstrategiasComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'sistemas',
    component: AreaComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganigramaComponent},
      {path: 'miembros', component: MiembrosComponent},
      {path: 'estrategias', component: EstrategiasComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'gth',
    component: AreaComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganigramaComponent},
      {path: 'miembros', component: MiembrosComponent},
      {path: 'estrategias', component: EstrategiasComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'marketing',
    component: AreaComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganigramaComponent},
      {path: 'miembros', component: MiembrosComponent},
      {path: 'estrategias', component: EstrategiasComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'logistica',
    component: AreaComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganigramaComponent},
      {path: 'miembros', component: MiembrosComponent},
      {path: 'estrategias', component: EstrategiasComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'rrpp',
    component: AreaComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganigramaComponent},
      {path: 'miembros', component: MiembrosComponent},
      {path: 'estrategias', component: EstrategiasComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }
