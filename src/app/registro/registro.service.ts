import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
   providedIn: 'root'
})
export class RegistroService {

  
  private apiUrl = 'http://localhost:3000/registro'; 

  constructor(private http: HttpClient) {}

  registrarLibro(titulo: string, autor: string, anio: number, precio: number): Observable<any> {
    const libro= { titulo, autor, anio, precio};
    return this.http.post(this.apiUrl, libro);
   }

   obtenerLibros(): Observable<any[]> {
      return this.http.get<any[]>('http://localhost:3000/registro/libros');
    }
    
   obtenerCategorias(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/categorias`);
   } 
    
}
