import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GraphComponent } from './graph/graph.component';
import { PiechartComponent } from './piechart/piechart.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: GraphComponent },
    ]),
    ChartsModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    GraphComponent,
    PiechartComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faCoffee);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/