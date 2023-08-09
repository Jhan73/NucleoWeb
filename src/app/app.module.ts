import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }from '@angular/forms'
import { HttpClientModule }from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FooterComponent } from './shared/components/footer/footer.component';

// mock
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDataService } from './services/mock-data.service';
import { LayoutComponent } from './layouts/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PageNotFoundComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
