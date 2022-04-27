import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Puzzle1MathComponent } from './puzzles/puzzle1-math/puzzle1-math.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { Puzzle2Component } from './puzzles/puzzle2/puzzle2.component';
import { Puzzle3Component } from './puzzles/puzzle3/puzzle3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProjectsComponent,
    HomeComponent,
    AboutComponent,
    Puzzle1MathComponent,
    TextInputComponent,
    Puzzle2Component,
    Puzzle3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
