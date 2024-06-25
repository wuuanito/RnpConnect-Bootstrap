import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InformaticaComponent } from './pages/DEPARTAMENTOS/informatica/informatica.component';
import { Informaticav0Component } from './pages/DEPARTAMENTOS/informaticav0/informaticav0.component';
import { InicioInformaticaComponent } from './pages/DEPARTAMENTOS/informaticav0/inicio-informatica/inicio-informatica.component';
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
