import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { AreasComponent } from './components/areas/areas.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'areas', component: AreasComponent},
  {path: 'testimonios', component: TestimoniosComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
