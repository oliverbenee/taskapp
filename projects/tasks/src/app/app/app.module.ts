import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskoverviewComponent } from '../taskoverview/taskoverview.component';
import { TasktabheaderComponent } from '../tasktabheader/tasktabheader.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskoverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TasktabheaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
