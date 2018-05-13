import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { LocalStorageModule } from 'angular-2-local-storage';

const appRoutes: Routes = [
  { path: 'auth/login', component: UserComponent },
  { path: 'page/deshbord',      component: DashbordComponent },
            { path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ReactiveFormsModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  }) // <-- #2 add to @NgModule imports

    // other imports here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
