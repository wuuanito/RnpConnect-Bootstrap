import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Informaticav0Component } from './pages/DEPARTAMENTOS/informaticav0/informaticav0.component';
import { InicioInformaticaComponent } from './pages/DEPARTAMENTOS/informaticav0/inicio-informatica/inicio-informatica.component';
import { BolsaInformaticaComponent } from './pages/DEPARTAMENTOS/informaticav0/bolsa-informatica/bolsa-informatica.component';
import { SolicitudesInformaticaComponent } from './pages/DEPARTAMENTOS/informaticav0/solicitudes-informatica/solicitudes-informatica.component';
import { UsuariosInformaticaComponent } from './pages/DEPARTAMENTOS/informaticav0/usuarios-informatica/usuarios-informatica.component';
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'layout',
        component: LayoutComponent,
        children: [
          {
            path: 'inicio',
            component: InicioComponent
          },
          {
            path:'informatica',
            component:Informaticav0Component,
            children:[
              {
                path:'inicio-informatica',
                component:InicioInformaticaComponent
              },
              {
                path:'bolsa-informatica',
                component:BolsaInformaticaComponent
              },
              {
                path:'solicitudes-informatica',
                component:SolicitudesInformaticaComponent
              },
              {
                path:'usuarios-informatica',
                component:UsuariosInformaticaComponent
              }
                
            ]
          }
        ]
      }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
