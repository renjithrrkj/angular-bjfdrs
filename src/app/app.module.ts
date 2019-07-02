import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: GraphComponent },
    ]),
    ChartsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    GraphComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/