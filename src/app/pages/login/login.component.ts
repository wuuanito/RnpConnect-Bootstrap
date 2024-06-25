import { Component } from '@angular/core';
import {Router,RouterLink} from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

login() {
    // login logic here

    // redirect to home page
    this.router.navigateByUrl('/layout/inicio');
  }

}
