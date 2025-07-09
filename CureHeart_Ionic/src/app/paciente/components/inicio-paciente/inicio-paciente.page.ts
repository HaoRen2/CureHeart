import {Component, inject, Input, OnInit} from '@angular/core';
import { PacientePagePage } from '../../pages/paciente-page/paciente-page.page';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { PacienteMainPage } from '../../layout/paciente-main/paciente-main.page';
import { AuthService } from 'src/app/services/auth.service';
import {PacienteService} from "../../../services/paciente.service";

@Component({
  selector: 'app-inicio-paciente',
  templateUrl: './inicio-paciente.page.html',
  styleUrls: ['./inicio-paciente.page.scss'],
})

// Pagina inicial de la pagina que se visualiza unos botones con su funcion y
// ver si tiene cita se sale la cita mas aproximante que ya trae ordenado por el backend
export class InicioPacientePage implements OnInit {

  paciente: Paciente;

  private authService = inject(AuthService);
  private pacienteService = inject(PacienteService);
  constructor(public pacientePage: PacienteMainPage) {
    this.pacientePage.value$.subscribe(value => {
      this.paciente = value;
    });
   }

  ngOnInit() {
  }

  logOut() {
    this.authService.clearUser();
  }


}
