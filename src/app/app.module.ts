import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { LoansComponent } from './services/loans/loans.component';
import { PersonalComponent } from './services/loans/personal/personal.component';
import { EducationComponent } from './services/loans/education/education.component';
import { CarComponent } from './services/loans/car/car.component';
import { HomeLoanComponent } from './services/loans/home-loan/home-loan.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { RestService } from './rest.service';
import { DepositsComponent } from './services/deposits/deposits.component';
import { FixedComponent } from './services/deposits/fixed/fixed.component';
import { RecurringComponent } from './services/deposits/recurring/recurring.component';
import { AuthenticationService } from './authentication.service';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactUsComponent,
    ServicesComponent,
    LoansComponent,
    PersonalComponent,
    EducationComponent,
    CarComponent,
    HomeLoanComponent,
    AboutComponent,
    SignupComponent,
    DepositsComponent,
    FixedComponent,
    RecurringComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [RestService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
