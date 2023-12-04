import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/home'},
  {path:'home', component: HomeComponent},
  {path:'contacts', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'404', component: ErrorComponent},
  {path:'**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
