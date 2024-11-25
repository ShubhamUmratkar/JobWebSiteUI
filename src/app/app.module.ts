import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificationComponent } from './component/certification/certification.component';
import { FooterComponent } from './component/footer/footer.component';
import { HiringPartnerComponent } from './component/hiring-partner/hiring-partner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomepageComponent } from './component/homepage/homepage.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InternshipComponent } from './component/internship/internship.component';
import { JobSliderComponent } from './component/job-slider/job-slider.component';
import { InternshipSliderComponent } from './component/internship-slider/internship-slider.component';
import { LoginComponent } from './component/login/login.component';
import { AdminpanelComponent } from './component/adminpanel/adminpanel.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AdminlogindynamicComponent } from './component/adminlogindynamic/adminlogindynamic.component';
import { AdminregisterComponent } from './component/adminregister/adminregister.component';

import { RegisterComponent } from './component/register/register.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { ViewAllInternshipComponent } from './component/view-all-internship/view-all-internship.component';
import { SaveJobComponent } from './component/save-job/save-job.component';
import { ViellAllJobsComponent } from './component/viell-all-jobs/viell-all-jobs.component';
import { JobspostsComponent } from './component/jobsposts/jobsposts.component';




@NgModule({
  declarations: [
    AppComponent,
    CertificationComponent,
    FooterComponent,
    HiringPartnerComponent,

    HomepageComponent,
    NavbarComponent,
    InternshipComponent,
    JobSliderComponent,
    InternshipSliderComponent,
    LoginComponent,
    AdminpanelComponent,
    AdminloginComponent,
    AdminlogindynamicComponent,
    AdminregisterComponent,
    RegisterComponent,
    UserlistComponent,
    ViewAllInternshipComponent,
    SaveJobComponent,
    ViellAllJobsComponent,
    JobspostsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
