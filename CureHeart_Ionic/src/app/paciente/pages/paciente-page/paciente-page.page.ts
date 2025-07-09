import { Component, OnInit, inject } from '@angular/core';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';
import {PacienteMainPage} from "../../layout/paciente-main/paciente-main.page";

@Component({
  selector: 'app-paciente-page',
  templateUrl: './paciente-page.page.html',
  styleUrls: ['./paciente-page.page.scss'],
})
// Pagina que contiene las tabs
export class PacientePagePage implements OnInit {

  constructor() {

   }

  ngOnInit() {

  }





}
