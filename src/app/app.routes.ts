import { Routes } from '@angular/router';
import { PublicNavigationComponent } from './+navigations/public-navigation/ui/public-navigation.component';
import { HomeComponent } from './+pages/home/ui/home.component';
import { ModelsComponent } from './+pages/models/ui/models.component';
import { Pages404Component } from './+pages/pages404/ui/pages404.component';

export const routes: Routes = [
  {
    path: 'public',
    component: PublicNavigationComponent,
    children: [
      { path: 'Home', component: HomeComponent },
      { path: 'Models', component: ModelsComponent },
      { path: '', redirectTo: 'Home', pathMatch: 'prefix' },
    ],
  },
  {path:'pages404' , component:Pages404Component },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
];
