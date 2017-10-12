import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AjaxComponent } from './ajax';
import { NoContentComponent } from './no-content';
import { PromiseComponent } from './promise';
import { PromiseAllComponent } from './promise-all';

export const ROUTES: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'ajax',     component: AjaxComponent },
  { path: 'promise',  component: PromiseComponent },
  { path: 'promise-all',  component: PromiseAllComponent },
  { path: '**',       component: NoContentComponent },
];
