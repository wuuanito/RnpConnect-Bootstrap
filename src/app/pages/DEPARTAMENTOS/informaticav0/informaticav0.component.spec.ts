import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informaticav0Component } from './informaticav0.component';

describe('Informaticav0Component', () => {
  let component: Informaticav0Component;
  let fixture: ComponentFixture<Informaticav0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Informaticav0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Informaticav0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
