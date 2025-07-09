import { Component, OnInit, inject } from '@angular/core';
import { Medico } from 'src/app/interfaces/medico.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MedicoService } from 'src/app/services/medico.service';
import {BehaviorSubject} from "rxjs";
import {Paciente} from "../../../interfaces/paciente.interface";

@Component({
  selector: 'app-medico-main',
  templateUrl: './medico-main.page.html',
  styleUrls: ['./medico-main.page.scss'],
})

// Pagina home de los pacientes que coge la informacion del paciente y transfiere a todos otros paginas que necesita
export class MedicoMainPage implements OnInit {

  private medicoSubject = new BehaviorSubject<Medico>({
    especialidad: "",
    horario: {
      id: 0,
      horaInicio: '',
      horaFin: ''
    },
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
  value$ = this.medicoSubject.asObservable();
  public medico: Medico;
  private authService = inject(AuthService);
  private medicoService = inject(MedicoService);

  constructor() {
    setTimeout(() => {
      this.cogerMedico()
    }, 1500);
   }

  ngOnInit() {

  }

  setMedico(nuevoPaciente: Medico) {
    this.medicoSubject.next(nuevoPaciente);
  }

  cogerMedico(){
    this.medicoService.getMedico(this.authService.currentUserValue!.email).subscribe(
      {
        next: value => {
          this.setMedico(value)
          this.medico = value;
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }
}
