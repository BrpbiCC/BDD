import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { RegistroComponent } from '../registro/registro.component';
import { HomePage } from './home.page';
import { RegistroPageModule } from '../registro/registro.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RegistroComponent,
    RegistroPageModule
  ],
  
  declarations:[HomePage]
})
export class HomePageModule {}
