import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeService } from './servics/bike.service';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component'
import {ReactiveFormsModule} from '@angular/forms';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
