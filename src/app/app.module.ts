import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './homepage/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductCatlogueComponent } from './homepage/product-catlogue/product-catlogue.component';
import { RegisterComponent } from './homepage/register/register.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './dashboard/product-details/product-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNavbarComponent } from './dashboard/dashboard-navbar/dashboard-navbar.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomepageComponent,
    ProductCatlogueComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ProductDetailsComponent,
    DashboardComponent,
    DashboardNavbarComponent,
    CategoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [DatePipe,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
