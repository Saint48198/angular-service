import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AjaxComponent } from './ajax';
import { NoContentComponent } from './no-content';
import { PromiseComponent } from './promise';
import { PromiseAllComponent } from './promise-all';
import { Observable1Component } from './observable1';
import { Observable2Component } from './observable2';

export const ROUTES: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'ajax',     component: AjaxComponent },
  { path: 'promise',  component: PromiseComponent },
  { path: 'promise-all',  component: PromiseAllComponent },
  { path: 'observable1', component: Observable1Component },
  { path: 'observable2', component: Observable2Component },
  { path: '**',       component: NoContentComponent },
];
