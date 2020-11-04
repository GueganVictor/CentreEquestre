import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HorsesDetailsComponent } from './components/admin-pages/horses-details/horses-details.component';
import { HorsesListComponent } from './components/admin-pages/horses-list/horses-list.component';
import { AddHorsesComponent } from './components/admin-pages/add-horses/add-horses.component';
import { UsersListComponent } from './components/admin-pages/users-list/users-list.component';
import { UsersDetailsComponent } from './components/admin-pages/users-details/users-details.component';
import { AddUsersComponent } from './components/admin-pages/add-users/add-users.component';
import { ApplyToLessonComponent } from './components/riders/apply-to-lesson/apply-to-lesson.component';
import { ProfileComponent } from './components/everyone/profile/profile.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { AuthentificationComponent } from './components/services/authentification/authentification.component';
import { HorsesComponent } from './components/services/horses/horses.component';
import { UsersComponent } from './components/services/users/users.component';
import { LessonsComponent } from './components/services/lessons/lessons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HorsesDetailsComponent,
    HorsesListComponent,
    AddHorsesComponent,
    UsersListComponent,
    UsersDetailsComponent,
    AddUsersComponent,
    ApplyToLessonComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    AuthentificationComponent,
    HorsesComponent,
    UsersComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
