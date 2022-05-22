import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

import { MainComponent } from './main/main.component';
import { CfopComponent } from './cfop/cfop.component';
import { BeginnerCrossComponent } from './beginner-cross/beginner-cross.component';
import { BeginnerF2lComponent } from './beginner-f2l/beginner-f2l.component';
import { BeginnerOllComponent } from './beginner-oll/beginner-oll.component';
import { BeginnerPllComponent } from './beginner-pll/beginner-pll.component';
import { BeginnerCfopComponent } from './beginner-cfop/beginner-cfop.component';
import { SafePipe } from './safe.pipe';
import { CubeComponent } from './cube/cube.component';
import { AdvancedCfopComponent } from './advanced-cfop/advanced-cfop.component';
import { AdvancedPllComponent } from './advanced-pll/advanced-pll.component';
import { SimpleHorizontalPickerComponent } from './simple-horizontal-picker/simple-horizontal-picker.component';
import { AdvancedOllComponent } from './advanced-oll/advanced-oll.component';
import { AdvancedCrossComponent } from './advanced-cross/advanced-cross.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CfopComponent,
    BeginnerCrossComponent,
    BeginnerF2lComponent,
    BeginnerOllComponent,
    BeginnerPllComponent,
    BeginnerCfopComponent,
    SafePipe,
    CubeComponent,
    AdvancedCfopComponent,
    AdvancedPllComponent,
    SimpleHorizontalPickerComponent,
    AdvancedOllComponent,
    AdvancedCrossComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
