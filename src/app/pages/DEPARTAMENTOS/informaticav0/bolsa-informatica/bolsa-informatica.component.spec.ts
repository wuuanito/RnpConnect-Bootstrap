import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaInformaticaComponent } from './bolsa-informatica.component';

describe('BolsaInformaticaComponent', () => {
  let component: BolsaInformaticaComponent;
  let fixture: ComponentFixture<BolsaInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsaInformaticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolsaInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
