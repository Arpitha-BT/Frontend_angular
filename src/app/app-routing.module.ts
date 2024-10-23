import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthGuard } from './auth-guard.guard'; 



const routes: Routes = [
  {path:"login",component:LoginComponent},
  { path: 'home', component: HomeComponent ,canActivate:[AuthGuard]},
  { path: 'about', component: AboutComponent },
   { path: 'sidebar', component: SidebarComponent },
   { path: 'navbar', component: NavbarComponent },
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   {path:"**",redirectTo:"/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
