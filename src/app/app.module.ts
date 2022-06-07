import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import { NonAuthenticatedComponent } from './components/nonauthenticated/nonauthenticated.component';
import { ActivateService } from './services/activate.service';

const routes: Routes = [
  {
    path: 'authenticated',
    component: AuthenticatedComponent,
    canActivate: [
      ActivateService
    ]
  },
  {
    path: '**',
    component: NonAuthenticatedComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedComponent,
    NonAuthenticatedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
