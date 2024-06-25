import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-informatica',
  standalone: true,
  imports: [ RouterOutlet,RouterLink],
  templateUrl: './informatica.component.html',
  styleUrls: ['./informatica.component.css']
})
export class InformaticaComponent {

  ngOnInit() {
    // Inicializar todos los offcanvas
    const offcanvasElements = document.querySelectorAll('.offcanvas');
    offcanvasElements.forEach(offcanvasEl => {
      new bootstrap.Offcanvas(offcanvasEl);
    });

    // Cerrar el offcanvas cuando se hace clic en un enlace del menú en dispositivos pequeños
    const navLinks = document.querySelectorAll('#sidebar .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('sidebar'));
        if (offcanvas && window.innerWidth < 768) {
          offcanvas.hide();
        }
      });
    });
  }
}
