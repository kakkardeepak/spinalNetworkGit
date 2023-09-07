import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainPageComponent } from './main-page/main-page.component';
import { RehabilitationComponent } from './rehabilitation/rehabilitation.component';
import { ExpertWitnessComponent } from './expert-witness/expert-witness.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RehabilitationComponent,
    ExpertWitnessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
