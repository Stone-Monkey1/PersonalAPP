import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { Puzzle1MathComponent } from './puzzles/puzzle1-math/puzzle1-math.component';
import { Puzzle2Component } from './puzzles/puzzle2/puzzle2.component';
import { Puzzle3Component } from './puzzles/puzzle3/puzzle3.component';
import { Puzzle4Component } from './puzzles/puzzle4/puzzle4.component';
import { Puzzle5Component } from './puzzles/puzzle5/puzzle5.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'puzzle1', component: Puzzle1MathComponent},
  {path: '93153173', component: Puzzle2Component},
  {path: '8463', component: Puzzle3Component},
  {path: '25678', component: Puzzle4Component},
  {path: '5', component: Puzzle5Component},
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
