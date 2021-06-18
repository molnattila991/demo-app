import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootStateModule, ToolsProviderModule } from 'projects/infrastructure/src/public-api';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiSettingsService } from './services/ui-settings.service';
import { ngrxExtModules } from 'src/build-specifics/ngrx-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,

    ToolsProviderModule,
    RootStateModule,
    ngrxExtModules
  ],
  providers: [
    UiSettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
