import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-pipes.component.html',
  styleUrl: './form-pipes.component.css'
})
export class FormPipesComponent {
  alumnos = [
    {nombre: "Luis angel"},
    {nombre: "Luis alberto"},
    {nombre: "Luis Raúl"},
    {nombre: "Luis Gabriel"}
  ]
  fechaActual = new Date()
  cursos = [
    {nombre: "Desarrollo de Aplicacion web", precio: 3200},
    {nombre: "Desarrollo de Servicio web", precio:2500},
    {nombre: "Base de datos 2", precio: 2850},
    {nombre: "Ingles tecnico", precio: 1850},
  ]
}
