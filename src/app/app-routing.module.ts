import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
import { CategoryComponent } from './category/category.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent
  },
  {
    
    path:'doctor/:id',
    component:BookingComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {path:'login',
  component:AuthComponent,canActivate:[AuthGuard]
},
{
  path:"category",
  component:CategoryComponent
},
{
  path:"Confirmemail",
  component:ConfirmEmailComponent
}



 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
