import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootStateModule } from 'projects/infrastructure/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
