import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }from '@angular/forms'
import { HttpClientModule }from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';

// mock
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { MockDataService } from './services/mock-data.service';
import { SharedModule } from './shared/shared.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { MenuBarModule } from './shared/components/menu-bar/menu-bar.module';
import { LayoutComponent } from './layouts/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FooterModule,
    MenuBarModule,
    //InMemoryWebApiModule.forRoot(MockDataService)
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
