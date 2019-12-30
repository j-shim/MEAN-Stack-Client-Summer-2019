import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BoardsComponent } from './components/boards/boards.component';
import { PostsComponent } from './components/posts/posts.component';
import { StaticComponent } from './components/static/static.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'boards/:bid', component: BoardsComponent },
  { path: 'boards/:bid/:pid', component: PostsComponent },
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
