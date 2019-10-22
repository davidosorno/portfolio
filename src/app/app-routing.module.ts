import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactmeComponent } from './contactme/contactme.component';


const routes: Routes = [
  { path: '', component: AboutmeComponent },
  { path: 'projects', component: PortfolioComponent },
  { path: 'contactme', component: ContactmeComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: ''},
  // the ** will catch anything that did not match any of the above routes
  { path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
