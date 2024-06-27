import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

import { MatExpansionModule, } from '@angular/material/expansion';
import { AccordionModule } from 'primeng/accordion';

interface Report {
  id: number;
  name: string;
  hours: number;
  accounted: boolean;
}

interface TableData {
  title: string;
  reports: Report[];
}


@Component({
  selector: 'app-bolsa-informatica',
  standalone: true,
  imports: [MatExpansionModule,CommonModule,AccordionModule,MatDividerModule],
  templateUrl: './bolsa-informatica.component.html',
  styleUrl: './bolsa-informatica.component.css'
})
export class BolsaInformaticaComponent implements OnInit {
  tables: TableData[] = [
    {
      title: 'Proyecto A',
      reports: [
        { id: 1, name: 'Informe 1', hours: 5, accounted: true },
        { id: 2, name: 'Informe 2', hours: 78, accounted: false },
      ]
    },
    {
      title: 'Proyecto B',
      reports: [
        { id: 3, name: 'Informe 3', hours: 4, accounted: true },
        { id: 4, name: 'Informe 4', hours: 2, accounted: true },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void { }

  calculateTotal(reports: Report[]): number {
    return reports.reduce((sum, report) => sum + report.hours, 0);
  }

  panels = [
    { title: 'Panel 1', content: 'Contenido del panel 1' },
    { title: 'Panel 2', content: 'Contenido del panel 2' },
    { title: 'Panel 3', content: 'Contenido del panel 3' }
  ];
  addProvider() {
    const newProvider = {
      title: `Proveedor ${this.panels.length + 1}`,
      content: `Contenido del proveedor ${this.panels.length + 1}`
    };
    this.panels.push(newProvider);
  }

}
