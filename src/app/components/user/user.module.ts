import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule, Routes } from '@angular/router';
// day 4 task5 lazy loading
const routes:Routes=[
  {path: '', redirectTo: 'view', pathMatch: 'full'},
  {path:'view', component: ViewProfileComponent,title:'view Profile'},
  {path:'edit', component: EditProfileComponent,title:'edit Profile'},
  {path:'login', component: LoginComponent,title:'login'}
];

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    // I deal with modules on routes
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
