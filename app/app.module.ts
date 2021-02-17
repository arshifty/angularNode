import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ViewComponent } from './hero/view/view.component';
import { AddUserComponent } from './hero/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EmployeeGenderPipe } from './home/employeeTitle.pipe';
import { StyleDirective } from './home/style.directive';
import { AdminModule  } from './admin/admin.module';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { HomepageComponent } from './homepage/homepage.component';
import{ ResolveGuard } from './guards/resolve.guard'


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddUserComponent,
    HomeComponent,
    EmployeeGenderPipe,
    StyleDirective,
    LazyComponentComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ModalModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor()
  {
    console.log("AppModule  loaded" );
  }


}
