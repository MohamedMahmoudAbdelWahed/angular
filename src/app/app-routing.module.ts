import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductParentComponent } from './components/product-parent/product-parent.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProuductDetailsComponent } from './components/prouduct-details/prouduct-details.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ObservableAndOperatorComponent } from './components/observable-and-operator/observable-and-operator.component';

const routes: Routes = [
// day 4 task2

  {path: '', redirectTo: 'home', pathMatch: 'full'},//dafault path
  {path: 'home', component:MainHomeComponent,title: 'Home page'},
  {path:'products',component:ProductParentComponent,title:'products'},
  {path:'aboutus', component:AboutUsComponent , title:'About Us'},
  {path:'contactus', component:ContactUsComponent,title:'Contact Us'},
  // day 4 task 3
  {path:'prd/:productID', component:ProuductDetailsComponent,title:'Product details page'},
 // day 5 task6
  {path:'obs', component:ObservableAndOperatorComponent,title:"observable and operator"},
  // day 4 task 5
  //lazy loading => It is a module in which we put a group of components (use it distribute components in module )
{
  path: 'user',
  loadChildren: () => import('src/app/components/user/user.module').then(m => m.UserModule)
},

  {path:'**',component:NotFoundPageComponent,title:'Not Found page'},//wild card path(not found)


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
