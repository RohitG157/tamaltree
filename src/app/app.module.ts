import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MenuBarComponent } from './admin/menu-bar/menu-bar.component';
import { FooterComponent } from './admin/footer/footer.component';
import { LoginComponent } from './admin/login/login.component';
import { DataService } from './service/data.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuBarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
