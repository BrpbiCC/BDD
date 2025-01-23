import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LibrosComponent } from './libros.component';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
  imports:  [IonicModule, LibrosComponent],
  standalone: true

})
export class LibrosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
