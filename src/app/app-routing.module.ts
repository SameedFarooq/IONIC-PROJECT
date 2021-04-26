import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'start-slides',
    loadChildren: () => import('./start-slides/start-slides.module').then( m => m.StartSlidesPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'ionic-page',
    loadChildren: () => import('./ionic-page/ionic-page.module').then( m => m.IonicPagePageModule)
  },
  {
    path: 'ionic-two',
    loadChildren: () => import('./ionic-two/ionic-two.module').then( m => m.IonicTwoPageModule)
  },
  {
    path: 'ionic-three',
    loadChildren: () => import('./ionic-three/ionic-three.module').then( m => m.IonicThreePageModule)
  },
  {
    path: 'ionic-four',
    loadChildren: () => import('./ionic-four/ionic-four.module').then( m => m.IonicFourPageModule)
  },
  {
    path: 'ionic-five',
    loadChildren: () => import('./ionic-five/ionic-five.module').then( m => m.IonicFivePageModule)
  },
  {
    path: 'ionic-six',
    loadChildren: () => import('./ionic-six/ionic-six.module').then( m => m.IonicSixPageModule)
  },
  {
    path: 'ionic-seven',
    loadChildren: () => import('./ionic-seven/ionic-seven.module').then( m => m.IonicSevenPageModule)
  },
  {
    path: 'ionic-eight',
    loadChildren: () => import('./ionic-eight/ionic-eight.module').then( m => m.IonicEightPageModule)
  },
  {
    path: 'profile-two',
    loadChildren: () => import('./profile-two/profile-two.module').then( m => m.ProfileTwoPageModule)
  },
  {
    path: 'ionic-nine',
    loadChildren: () => import('./ionic-nine/ionic-nine.module').then( m => m.IonicNinePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
