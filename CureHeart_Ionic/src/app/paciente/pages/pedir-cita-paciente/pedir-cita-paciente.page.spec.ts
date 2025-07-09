import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedirCitaPacientePage } from './pedir-cita-paciente.page';

describe('PedirCitaPacientePage', () => {
  let component: PedirCitaPacientePage;
  let fixture: ComponentFixture<PedirCitaPacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirCitaPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
