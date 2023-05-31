import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {CommonLayoutComponent} from './layouts/common-layout/common-layout.component';

import {API_BASE_URL} from './shared/services/base-url.constant';
import {environment} from 'src/environments/environment';
import {ContactComponent} from "./pages/contact/contact/contact.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/contact',
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [],
    children: []
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      enableTracing: false
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {provide: API_BASE_URL, useValue: environment.api},
  ]
})

export class AppRoutingModule {
  //
}
