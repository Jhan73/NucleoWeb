import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { SitemasComponent } from './pages/sitemas/sitemas.component';
import { PmoComponent } from './pages/pmo/pmo.component';
import { InvestigacionComponent } from './pages/investigacion/investigacion.component';
import { IndustrialComponent } from './pages/industrial/industrial.component';
import { GthComponent } from './pages/gth/gth.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { LogisticaComponent } from './pages/logistica/logistica.component';
import { RrppComponent } from './pages/rrpp/rrpp.component';
import { AreaNavComponent } from './components/area-nav/area-nav.component';
import { AreaContentComponent } from './components/area-content/area-content.component';
import { OrganizationChartComponent } from './pages/modules/organization-chart/organization-chart.component';
import { MembersComponent } from './pages/modules/members/members.component';
import { StrategiesComponent } from './pages/modules/strategies/strategies.component';
import { MemberComponent } from './components/member/member.component';
import { AreaComponent } from './components/area/area.component';
import { AreasComponent } from './pages/areas/areas.component';
import { ActivitiesComponent } from './pages/modules/activities/activities.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SitemasComponent,
    PmoComponent,
    InvestigacionComponent,
    IndustrialComponent,
    GthComponent,
    MarketingComponent,
    LogisticaComponent,
    RrppComponent,
    AreaNavComponent,
    AreaContentComponent,
    OrganizationChartComponent,
    MembersComponent,
    StrategiesComponent,
    MemberComponent,
    AreaComponent,
    AreasComponent,
    ActivitiesComponent,
  ],
  imports: [
    CommonModule,
    AreasRoutingModule,
    SharedModule,
  ]
})
export class AreasModule { }
