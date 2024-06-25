import { Component } from '@angular/core';
import introJs from 'intro.js';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  title = 'RNP CONNECT';

  constructor() {}

  ngAfterViewInit() {
    // Puedes inicializar Intro.js aquí si necesitas hacer algo después de que la vista se haya renderizado
  }

  startTour() {
    const intro = introJs();
    intro.setOptions({
      steps: [
        {
          element: '.jumbotron',
          intro: '¡Bienvenido a RNP CONNECT! Aquí comienza tu viaje.',
          position: 'bottom'
        },
        {
          element: '.col-md-4:nth-child(1)',
          intro: 'Aquí puedes generar y gestionar solicitudes fácilmente.',
          position: 'bottom'
        },
        {
          element: '.col-md-4:nth-child(2)',
          intro: 'Esta sección te ayuda a mantener la empresa conectada.',
          position: 'bottom'
        },
        {
          element: '.col-md-4:nth-child(3)',
          intro: 'Aquí puedes encontrar nuestras informaciones de contacto.',
          position: 'bottom'
        },
        {
          element: '#logoEmpresa',
          intro: 'Este es el logo de nuestra empresa, haz clic para abrir el menú.',
          position: 'bottom'
        }
      ]
    });
    intro.start();
  }
}