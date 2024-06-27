import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common'; 
import {MatTableModule} from '@angular/material/table';
interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}
@Component({
  selector: 'app-usuarios-informatica',
  standalone: true,
  imports: [MatTableModule,MatPaginator,MatSort,MatIconModule,MatChipsModule,MatFormFieldModule,CommonModule],
  templateUrl: './usuarios-informatica.component.html',
  styleUrl: './usuarios-informatica.component.css'
})
export class UsuariosInformaticaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'role', 'status', 'actions'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    const users: User[] = Array(50).fill(null).map((_, index) => ({
      id: index + 1,
      username: `user${index + 1}`,
      email: `user${index + 1}@example.com`,
      role: ['admin', 'user', 'guest'][Math.floor(Math.random() * 3)],
      status: Math.random() > 0.3 ? 'active' : 'inactive'
    }));

    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    // Inicialización adicional si es necesaria
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editUser(user: User) {
    console.log('Editar usuario:', user);
  }

  deleteUser(id: number) {
    if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
      this.dataSource.data = this.dataSource.data.filter(u => u.id !== id);
    }
  }

  openDialog() {
    console.log('Abrir diálogo para crear nuevo usuario');
  }

  getRoleClass(role: string): string {
    return `role-${role.toLowerCase()}`;
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }
}