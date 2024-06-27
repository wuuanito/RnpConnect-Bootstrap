import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Solicitud {
  id: number;
  fecha: Date;
  solicitante: string;
  tipo: string;
  estado: 'pendiente' | 'en-proceso' | 'completada';
  descripcion: string;
}

@Component({
  selector: 'app-solicitudes-informatica',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './solicitudes-informatica.component.html',
  styleUrl: './solicitudes-informatica.component.css'
})
export class SolicitudesInformaticaComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  filteredSolicitudes: Solicitud[] = [];
  displayedSolicitudes: Solicitud[] = [];
  searchTerm: string = '';
  statusFilter: string = '';

  currentPage: number = 1;
  pageSize: number = 10;
  totalItems: number = 0;

  ngOnInit() {
    this.solicitudes = Array(800).fill(0).map((_, index) => ({
      id: index + 1,
      fecha: new Date(),
      solicitante: `Solicitante ${index + 1}`,
      tipo: index % 2 === 0 ? 'Vacaciones' : 'Permiso',
      estado: ['pendiente', 'en-proceso', 'completada'][Math.floor(Math.random() * 3)] as 'pendiente' | 'en-proceso' | 'completada',
      descripcion: `Descripción de la solicitud ${index + 1}`
    }));
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    this.filteredSolicitudes = this.solicitudes.filter(solicitud =>
      solicitud.solicitante.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.statusFilter === '' || solicitud.estado === this.statusFilter)
    );
    this.totalItems = this.filteredSolicitudes.length;
    this.currentPage = 1;
    this.updateDisplayedSolicitudes();
  }

  updateDisplayedSolicitudes() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedSolicitudes = this.filteredSolicitudes.slice(startIndex, startIndex + this.pageSize);
    this.updatePagination();
  }

  onPageChange(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updateDisplayedSolicitudes();
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  updatePagination() {
    this.pages = this.getPaginationPages();
  }

  getPaginationPages(): number[] {
    const pagesToShow = 5;
    const half = Math.floor(pagesToShow / 2);
    let start = Math.max(this.currentPage - half, 1);
    let end = Math.min(start + pagesToShow - 1, this.totalPages);

    if (end - start < pagesToShow - 1) {
      start = Math.max(end - pagesToShow + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  pages: number[] = [];

  getLastShownItemNumber(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalItems);
  }
}