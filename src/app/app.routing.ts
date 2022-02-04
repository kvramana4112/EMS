import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';

export const AppRoutes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }],
  canLoad: [AuthGuard]},
  {
    path: '**',
    redirectTo: 'login'
  }
]