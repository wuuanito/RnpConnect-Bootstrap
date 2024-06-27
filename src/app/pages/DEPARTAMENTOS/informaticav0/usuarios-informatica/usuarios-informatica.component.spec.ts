import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosInformaticaComponent } from './usuarios-informatica.component';

describe('UsuariosInformaticaComponent', () => {
  let component: UsuariosInformaticaComponent;
  let fixture: ComponentFixture<UsuariosInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosInformaticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
