import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro/registro.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros-list', //cambie el selector 
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss'],
  imports:[ IonicModule,FormsModule, CommonModule],
  standalone:true
})
export class LibrosComponent implements OnInit {
  libros: any[] = [];
  categorias: any[] = [];

  constructor(private registroService: RegistroService) {}

  ngOnInit(): void {
    this.cargarLibros();
    this.cargarCategorias();
  }

  cargarLibros(): void {
    this.registroService.obtenerLibros().subscribe(
      data => this.libros = data,
      error => console.error('Error al obtener libros:', error)
    );
  }

  cargarCategorias(): void {
    this.registroService.obtenerCategorias().subscribe(
      data => this.categorias = data,
      error => console.error('Error al obtener categorías:', error)
    );
  }
}
