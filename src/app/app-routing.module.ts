import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about-me', component:  AboutMeComponent, data: { animation: 'AboutMePage' }},
  { path: 'experience', component:  ExperienceComponent, data: { animation: 'ExperiencePage' }},
  { path: 'projects', component:  ProjectsComponent, data: { animation: 'ProjectsPage' }},
  { path: 'skills', component:  SkillsComponent, data: { animation: 'SkillsPage' }},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
