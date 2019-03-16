import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { LoansComponent } from './services/loans/loans.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { DepositsComponent } from './services/deposits/deposits.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'about',component: AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'login',component:LoginComponent},
  {path:'signup/login',redirectTo:'login',pathMatch:'full'},
  {path:'signup',component: SignupComponent},
  {path:'login/signup',redirectTo:'signup',pathMatch:'full'},
  {path:'contact_us',component: ContactUsComponent},
  {path:'services/loans',component: LoansComponent},
  {path:'services/deposits',component: DepositsComponent},
  {path:'users/dashboard',canActivate:[AuthGuard],component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
