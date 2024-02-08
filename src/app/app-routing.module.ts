import { NgModule } from '@angular/core';
import { Route, Router, RouterModule, Routes, UrlTree } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteContainerComponent } from './components/note-container/note-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';
import { EditlablesComponent } from './components/editlables/editlables.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { AuthGuard } from './services/auth.guard';

const authenticateUser = (): boolean | UrlTree => {
  return localStorage.getItem('token') ? true : false
}
// ,canActivate:[()=>authenticateUser()]
const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:"notes",component:NoteContainerComponent},
    {path:"archive",component:ArchiveContainerComponent},
    {path:"trash",component:TrashContainerComponent},
    {path:"edit",component:EditlablesComponent},
    {path:"reminders",component:RemindersComponent}
    

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
