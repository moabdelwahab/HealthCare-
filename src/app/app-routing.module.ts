import { NgModule } from '@angular/core';
import{Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes=[
    {path:"",redirectTo:"/user/registration",pathMatch:"full"},
    {path:'user' , component:UserComponent,children:[
        {path:"login",component:LoginComponent},
        {path:"registration",component: RegistrationComponent}
    ]}

];

@NgModule(
    {
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    }
)

export class AppRoutingModule{
}