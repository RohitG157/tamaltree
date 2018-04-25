import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MenuBarComponent } from './admin/menu-bar/menu-bar.component';
import { FooterComponent } from './admin/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
