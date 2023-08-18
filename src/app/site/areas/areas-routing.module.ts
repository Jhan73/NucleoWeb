import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';
import { PmoComponent } from './pages/pmo/pmo.component';
import { OrganizationChartComponent } from './pages/modules/organization-chart/organization-chart.component';
import { MembersComponent } from './pages/modules/members/members.component';
import { StrategiesComponent } from './pages/modules/strategies/strategies.component';
import { ProjectsComponent } from './pages/modules/projects/projects.component';
import { InvestigacionComponent } from './pages/investigacion/investigacion.component';
import { IndustrialComponent } from './pages/industrial/industrial.component';
import { SitemasComponent } from './pages/sitemas/sitemas.component';
import { GthComponent } from './pages/gth/gth.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { LogisticaComponent } from './pages/logistica/logistica.component';
import { RrppComponent } from './pages/rrpp/rrpp.component';


const routes: Routes = [
  {
    path: 'pmo',
    component: PmoComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganizationChartComponent},
      {path: 'miembros', component: MembersComponent},
      {path: 'estrategias', component: StrategiesComponent},
      {path: 'proyectos', component: ProjectsComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'investigacion',
    component: InvestigacionComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganizationChartComponent},
      {path: 'miembros', component: MembersComponent},
      {path: 'estrategias', component: StrategiesComponent},
      {path: 'proyectos', component: ProjectsComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'industrial',
    component: IndustrialComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganizationChartComponent},
      {path: 'miembros', component: MembersComponent},
      {path: 'estrategias', component: StrategiesComponent},
      {path: 'proyectos', component: ProjectsComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'sistemas',
    component: SitemasComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganizationChartComponent},
      {path: 'miembros', component: MembersComponent},
      {path: 'estrategias', component: StrategiesComponent},
      {path: 'proyectos', component: ProjectsComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'gth',
    component: GthComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganizationChartComponent},
      {path: 'miembros', component: MembersComponent},
      {path: 'estrategias', component: StrategiesComponent},
      {path: 'proyectos', component: ProjectsComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'marketing',
    component: MarketingComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganizationChartComponent},
      {path: 'miembros', component: MembersComponent},
      {path: 'estrategias', component: StrategiesComponent},
      {path: 'proyectos', component: ProjectsComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'logistica',
    component: LogisticaComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganizationChartComponent},
      {path: 'miembros', component: MembersComponent},
      {path: 'estrategias', component: StrategiesComponent},
      {path: 'proyectos', component: ProjectsComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
  {
    path: 'rrpp',
    component: RrppComponent,
    children: [
      {path: '', redirectTo: 'organigrama', pathMatch: 'full'},
      {path: 'organigrama', component: OrganizationChartComponent},
      {path: 'miembros', component: MembersComponent},
      {path: 'estrategias', component: StrategiesComponent},
      {path: 'proyectos', component: ProjectsComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }