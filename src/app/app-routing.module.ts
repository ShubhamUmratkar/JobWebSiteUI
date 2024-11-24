import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { CertificationComponent } from './component/certification/certification.component';
import { HiringPartnerComponent } from './component/hiring-partner/hiring-partner.component';

import { HomepageComponent } from './component/homepage/homepage.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InternshipComponent } from './component/internship/internship.component';
import { JobSliderComponent } from './component/job-slider/job-slider.component';
import { InternshipSliderComponent } from './component/internship-slider/internship-slider.component';
import { LoginComponent } from './component/login/login.component';
import { AdminpanelComponent } from './component/adminpanel/adminpanel.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './component/adminregister/adminregister.component';
import { AdminlogindynamicComponent } from './component/adminlogindynamic/adminlogindynamic.component';
import { TermsandconditionsComponent } from './component/termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './component/privacypolicy/privacypolicy.component';
import { RegisterComponent } from './component/register/register.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { ViewAllInternshipComponent } from './component/view-all-internship/view-all-internship.component';
import { SaveJobComponent } from './component/save-job/save-job.component';
import { ViellAllJobsComponent } from './component/viell-all-jobs/viell-all-jobs.component';
import { JobspostsComponent } from './component/jobsposts/jobsposts.component';

const routes: Routes = [
  {path:'footer',component:FooterComponent},
  {path:'certification',component:CertificationComponent},
  {path:'hiringpartners',component:HiringPartnerComponent},

  {path:'',component:HomepageComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'internship',component:InternshipComponent},
  {path:'jobslider',component:JobSliderComponent},
  {path:'intershipslider',component:InternshipSliderComponent},
  {path:'login',component:LoginComponent},
  {path:'adminpanel',component:AdminpanelComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminregister',component:AdminregisterComponent},
  {path:'adminlogindynamic',component:AdminlogindynamicComponent},
  {path:'termsandcondition',component:TermsandconditionsComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'register',component:RegisterComponent},
  {path:'userslist',component:UserlistComponent},
  {path:'view-all-internship',component:ViewAllInternshipComponent},
  {path:'save-job',component:SaveJobComponent},
  {path:'view-all-jobs',component:ViellAllJobsComponent},
  {path:'job-posts',component:JobspostsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
