import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { ResultComponent } from './result.component';
import { CountState } from './app.state';
import {AddComponent} from './add.component';
import {MinusComponent} from './minus.component';
import {NbrClickComponent} from './nbr-click.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot([CountState])
  ],
  declarations: [
    AppComponent,
    ResultComponent,
    AddComponent,
    MinusComponent,
    NbrClickComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
