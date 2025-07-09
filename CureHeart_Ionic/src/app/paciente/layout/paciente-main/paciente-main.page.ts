import {Component, OnInit, inject, signal} from '@angular/core';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-paciente-main',
  templateUrl: './paciente-main.page.html',
  styleUrls: ['./paciente-main.page.scss'],
})
// Pagina home de los pacientes que coge la informacion del paciente y transfiere a todos otros paginas que necesita
export class PacienteMainPage implements OnInit {
  cargado: boolean = false;
  private pacienteSubject = new BehaviorSubject<Paciente>({
    apellido1: "",
    apellido2: "",
    citas: [],
    fechaNacimiento: undefined,
    genero: "",
    id: 0,
    nombre: "",
    telefono: "",
    userEmail: ""

  });
  paciente: Paciente
  value$ = this.pacienteSubject.asObservable();
  private authService = inject(AuthService);
  private pacienteService = inject(PacienteService);

  constructor() {
    setTimeout(() => {
      this.cogerPaciente()
    }, 1200);
   }

  ngOnInit() {

  }

  setPaciente(nuevoPaciente: Paciente) {
    this.pacienteSubject.next(nuevoPaciente);
  }

  cogerPaciente(){
    this.pacienteService.cogerPaciente(this.authService.currentUserValue!.email).subscribe(
      {
        next: value => {
         this.setPaciente(value)
          this.cargado = true
          this.paciente = value;
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }
  getValue() {
    return this.pacienteSubject.value;
  }
}

