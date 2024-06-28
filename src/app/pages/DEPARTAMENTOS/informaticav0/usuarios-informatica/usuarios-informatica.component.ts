import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';


interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
}




@Component({
  selector: 'app-usuarios-informatica',
  standalone: true,
  imports: [ 
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule
    
  ],
  templateUrl: './usuarios-informatica.component.html',
  styleUrl: './usuarios-informatica.component.css'
})
export class UsuariosInformaticaComponent  {
  displayedColumns: string[] = ['avatar', 'name', 'email', 'role', 'actions'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', avatar: 'assets/avatars/john.jpg' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', avatar: 'assets/avatars/jane.jpg' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', avatar: 'assets/avatars/jane.jpg' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', avatar: 'assets/avatars/jane.jpg' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', avatar: 'assets/avatars/jane.jpg' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', avatar: 'assets/avatars/jane.jpg' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', avatar: 'assets/avatars/jane.jpg' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', avatar: 'assets/avatars/jane.jpg' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', avatar: 'assets/avatars/jane.jpg' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', avatar: 'assets/avatars/jane.jpg' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', avatar: 'assets/avatars/jane.jpg' },

    // Añade más usuarios aquí
  ];

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: User, filter: string) => {
      return data.name.toLowerCase().includes(filter) ||
             data.email.toLowerCase().includes(filter) ||
             data.id.toString().includes(filter);
    };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addUser() {
    // Aquí puedes abrir un diálogo para añadir un nuevo usuario
    console.log('Añadir usuario');
  }

  editUser(user: User) {
    // Aquí puedes abrir un diálogo para editar el usuario
    console.log('Editar usuario', user);
  }

  deleteUser(user: User) {
    // Aquí puedes abrir un diálogo de confirmación antes de eliminar
    console.log('Eliminar usuario', user);
    this.users = this.users.filter(u => u.id !== user.id);
    this.dataSource.data = this.users;
  }
}