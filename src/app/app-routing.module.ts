import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

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
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  

    { path: 'registro', component: RegistroComponent },
    { path: '', redirectTo: 'registro', pathMatch: 'full' },
  {
    path: 'libros',
    loadChildren: () => import('./libros/libros.module').then( m => m.LibrosPageModule)
  }

  ];
  
 //CUANDO BORRES CARPETAS, BORRA AQUI EL PATH !!!!!!!!!!!!!
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
