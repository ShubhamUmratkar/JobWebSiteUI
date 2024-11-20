import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { CertificationComponent } from './component/certification/certification.component';
import { HiringPartnerComponent } from './component/hiring-partner/hiring-partner.component';
import { RegisterComponent } from './component/register/register.component';
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

const routes: Routes = [
  {path:'footer',component:FooterComponent},
  {path:'certification',component:CertificationComponent},
  {path:'hiringpartners',component:HiringPartnerComponent},
  {path:'register',component:RegisterComponent},
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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
