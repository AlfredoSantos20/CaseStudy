import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   

    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  
  {
    path: 'istanbul',
    loadChildren: () => import('./istanbul/istanbul.module').then( m => m.IstanbulPageModule)
  },
  {
    path: 'antalya',
    loadChildren: () => import('./antalya/antalya.module').then( m => m.AntalyaPageModule)
  },
  {
    path: 'inquire',
    loadChildren: () => import('./inquire/inquire.module').then( m => m.InquirePageModule)
  },
  {
    path: 'celsus',
    loadChildren: () => import('./celsus/celsus.module').then( m => m.CelsusPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'mosque',
    loadChildren: () => import('./mosque/mosque.module').then( m => m.MosquePageModule)
  },
  {
    path: 'oludeniz',
    loadChildren: () => import('./oludeniz/oludeniz.module').then( m => m.OludenizPageModule)
  },
  {
    path: 'mount',
    loadChildren: () => import('./mount/mount.module').then( m => m.MountPageModule)
  },
  {
    path: 'bodrum',
    loadChildren: () => import('./bodrum/bodrum.module').then( m => m.BodrumPageModule)
  },
  {
    path: 'pamukkale',
    loadChildren: () => import('./pamukkale/pamukkale.module').then( m => m.PamukkalePageModule)
  },
  {
    path: 'beach',
    loadChildren: () => import('./beach/beach.module').then( m => m.BeachPageModule)
  },
  {
    path: 'aspendos',
    loadChildren: () => import('./aspendos/aspendos.module').then( m => m.AspendosPageModule)
  },
  {
    path: 'foods',
    loadChildren: () => import('./foods/foods.module').then( m => m.FoodsPageModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then( m => m.HotelsPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
 
  
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
