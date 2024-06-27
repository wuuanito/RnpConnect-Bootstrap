import { Component } from '@angular/core';
import{RouterLink,RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-informaticav0',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './informaticav0.component.html',
  styleUrl: './informaticav0.component.css'
})
export class Informaticav0Component {

  menuItems = [
    { icon: 'bi-speedometer2', name: 'Inicio', route: 'inicio-informatica' },
    { icon: 'bi-ticket-perforated', name: 'Bolsa de Horas', route: 'bolsa-informatica' },
    { icon: 'bi-file-earmark-text', name: 'Solicitudes', route: 'solicitudes-informatica' },
    { icon: 'bi-people', name: 'Usuarios', route: 'usuarios-informatica' },
  ];

  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
