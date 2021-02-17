import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './hero/add-user/add-user.component';
import { ViewComponent } from './hero/view/view.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component'
import{ ResolveGuard } from './guards/resolve.guard';

const routes: Routes = [
  { 
    path: '', redirectTo: 'homepage', pathMatch: 'full' 
  },
  { 
    path: 'homepage', 
    component: HomepageComponent
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'add', 
    component: AddUserComponent 
  },
  { 
    path: 'display', 
    component: ViewComponent ,
    resolve: {
    data: ResolveGuard,
    },

  },
  { 
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
