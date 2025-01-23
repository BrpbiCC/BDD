import { Component, OnInit } from '@angular/core';
import { RegistroService } from './registro.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports:[ IonicModule,FormsModule],
  standalone:true
  
})

export class RegistroComponent {
  titulo: string = '';
  autor: string = '';
  anio: number | null = null;
  precio: number | null = null;

  constructor(private registroService: RegistroService) {}

  registrarLibro() {
    // Validación de campos obligatorios
    if (!this.titulo.trim() || !this.autor.trim() || !this.anio || !this.precio) {
      alert('Todos los campos son obligatorios. Por favor, completa el formulario.');
      return;
    }

    // Llamada al servicio para registrar el libro
    this.registroService.registrarLibro(this.titulo, this.autor, this.anio, this.precio).subscribe({
      next: (response) => {
        console.log('Libro registrado con éxito:', response);
        alert('Libro registrado con éxito');
        this.limpiarFormulario(); // Limpia el formulario después de registrar
      },
      error: (error) => {
        console.error('Error al registrar el libro:', error);
        alert('Hubo un error al registrar el libro. Por favor, intenta nuevamente.');
      },
    });
  }

  limpiarFormulario() {
    this.titulo = '';
    this.autor = '';
    this.anio = null;
    this.precio = null;
  }
}

