import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';


const routes: Routes = [
  { path: 'home', component:  HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about-me', component:  AboutMeComponent, data: { animation: 'AboutMePage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
