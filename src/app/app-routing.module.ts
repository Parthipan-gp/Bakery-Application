import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdmindataComponent } from './admindata/admindata.component';
import { activateGuard } from './services/activate.guard';
import { candeactivateGuard } from './services/candeactivate.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  
  {path:"",component:HomeComponent},
  {path:'order/:id',component:OrderDetailsComponent,canDeactivate:[candeactivateGuard]},
  {path:'login',component:LoginComponent},
  {path:'cake',component:AdmindataComponent,canActivate:[activateGuard]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
