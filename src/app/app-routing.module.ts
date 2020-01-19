import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { StaticComponent } from './components/static/static.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'page/:id', component: StaticComponent },
  { path: 'inquiry', component: InquiryComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
