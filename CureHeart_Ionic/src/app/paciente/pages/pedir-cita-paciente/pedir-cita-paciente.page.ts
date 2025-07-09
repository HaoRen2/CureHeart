import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cita, Paciente } from 'src/app/interfaces/paciente.interface';
import { PacienteMainPage } from '../../layout/paciente-main/paciente-main.page';
import { Medico } from 'src/app/interfaces/medico.interface';
import { MedicoService } from 'src/app/services/medico.service';
import { createCita } from 'src/app/interfaces/createCita.interface';
import { CitaService } from 'src/app/services/cita.service';
import { Router } from '@angular/router';
import {AuthService} from "../../../services/auth.service";
import {PacienteService} from "../../../services/paciente.service";
import {InicioPacientePage} from "../../components/inicio-paciente/inicio-paciente.page";

@Component({
  selector: 'app-pedir-cita-paciente',
  templateUrl: './pedir-cita-paciente.page.html',
  styleUrls: ['./pedir-cita-paciente.page.scss'],
})

// Pagina para que los paicentes se pide la cita.
export class PedirCitaPacientePage implements OnInit {

  private medicoService = inject(MedicoService);
  private citaService = inject(CitaService);
  private router = inject(Router);
  private authService = inject(AuthService);
  private pacienteService = inject(PacienteService);

  medicos: Medico[] = [];
  paciente: Paciente;

  horariosLibres: {id: number ,medico: string, hora: string, genero: string }[] = [];

  dia: number;
  mes: number;
  diaString: string;
  mesString: string;
  fechaActual: string;
  fechaElegido: Date;
  dateNow = new Date();
  //Variable más importantes que se guarda los nombres y hora de los medicos que tiene tiempo en esa hora
  diaHastaFinalDeMes: Date[] = [];
  //Coge las especialidades de los medicos existentes
  especialidades: string[] = [];
  horaInicio:number;
  cita: createCita;
  isLinear = true;
  nombre: string;
  posicion: number;
  turno: string = ''


  private fb = inject(FormBuilder)

  public firstFormGroup: FormGroup = this.fb.group({
    tiempos: ['', [Validators.required]],
    especialidad: ['',[Validators.required]],
    observaciones: [''],
  });

  public secondFormGroup: FormGroup = this.fb.group({
    nombre: ['']
  });

  //Coge el paciente
constructor(private pacienteMain: PacienteMainPage) {
    this.paciente = pacienteMain.paciente
    this.fechaActual = this.dateNow.toISOString()
    this.getDiasHastaFinalDeMes();
    this.mes = this.dateNow.getMonth() + 1;
    this.mesString = this.mes < 10 ? '0' + this.mes : this.mes.toString();
}

  ngOnInit() {
    this.cogerEspecialidades();
  }

  //Coge en la seleccion segun sea mañana pues empieza a las 9, si es tarde empieza las citas a las 14
  cogerTiempo() {
    if(this.firstFormGroup.controls['tiempos'].value === 'mañana'){
      this.horaInicio = 9;
    }else
      this.horaInicio = 14;

    }

    cogerEspecialidad() {
      this.cogerMedicoPorEspecialidad()
      }


  cogerMedicoPorEspecialidad(){
    this.medicoService.cogerMedicoSegunEspecialidad(this.firstFormGroup.controls['especialidad'].value).subscribe(
      {
        next: value => {
        this.medicos = value
        }
      }
    )
  }

  cogerEspecialidades(){
    this.medicoService.cogerEspecialidad().subscribe(
      {
        next: value => {
        this.especialidades = value
        }
      }
    )
  }

  //Coger la hora que quiere el usuario y pasar un for para visualizar las horas que tiene libre los medicos
  obtenerHorariosLibres(){
    this.horariosLibres = [];

    if (this.dia && this.medicos && this.medicos.length > 0) {
      this.medicos.forEach(medico => {
        if (medico.horario) {
          const horaInicioSplit = medico.horario.horaInicio.split(':').map(Number);
          const horaFinSplit = medico.horario.horaFin.split(':').map(Number);

          const horaInicio = new Date(this.dateNow.getFullYear(), this.mes, this.dia, horaInicioSplit[0], horaInicioSplit[1]);
          const horaFin = new Date(this.dateNow.getFullYear(), this.mes, this.dia, horaFinSplit[0], horaFinSplit[1]);

          let turnoInicio: Date;
          let turnoFin: Date;

          if (this.turno === 'mañana') {
            turnoInicio = new Date(this.dateNow.getFullYear(), this.mes, this.dia, 9, 0); // Turno mañana empieza a las 9:00
            turnoFin = new Date(this.dateNow.getFullYear(), this.mes, this.dia, 14, 0); // Turno mañana termina a las 14:00
          } else {
            turnoInicio = new Date(this.dateNow.getFullYear(), this.mes, this.dia, 14, 0); // Turno tarde empieza a las 14:00
            turnoFin = new Date(this.dateNow.getFullYear(), this.mes, this.dia, 20, 0); // Turno tarde termina a las 20:00
          }

          // Ajustar horaInicio y horaFin al turno seleccionado
          const horaInicioTurno = new Date(Math.max(horaInicio.getTime(), turnoInicio.getTime()));
          const horaFinTurno = new Date(Math.min(horaFin.getTime(), turnoFin.getTime()));

          let horaActualTemp = new Date(horaInicioTurno);

          while (horaActualTemp < horaFinTurno) {
            const horaActualString = horaActualTemp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const citaExistente = medico.citas.find(cita =>
              cita.time === horaActualString &&
              cita.date.toString() === this.dateNow.getFullYear() + '-' + this.mesString + '-' + this.diaString
            );

            if (!citaExistente) {
              this.horariosLibres.push({
                id: medico.id,
                medico: medico.nombre + ' ' + medico.apellido1,
                hora: horaActualString,
                genero: medico.genero
              });
            }

            horaActualTemp.setMinutes(horaActualTemp.getMinutes() + 30); // Incrementa 30 minutos
          }
        }
      });

      this.horariosLibres.sort((a, b) => a.hora.localeCompare(b.hora)); // Ordena fuera del bucle forEach
      }

  }

  cogerDia(num: number) {
    this.dia = num;
    this.diaString = this.dia < 10 ? '0'+ this.dia : this.dia.toString();
    this.turno = this.firstFormGroup.controls['tiempos'].value
    this.obtenerHorariosLibres()
    }

    //Trae la cita elegida y asigna una cita para después se envia al servcio
    cogerCita(citaCogida: { id: number; medico: string; hora: string; genero: string }, index: number) {
    this.posicion = index
     const citaTemp = citaCogida;
     this.mesString = this.mes < 10 ? '0' + this.mes : this.mes.toString();

      if(citaCogida.genero == 'hombre'){
        this.nombre = 'Dr. '+citaTemp.medico
      }else if(citaCogida.genero == 'mujer'){
        this.nombre = 'Dra. '+citaTemp.medico
      }

      this.cita = {
        nombrePaciente: this.paciente.nombre,
        nombreMedico: this.nombre,
        especialidad: this.firstFormGroup.controls['especialidad'].value,
        descripcion: this.firstFormGroup.controls['observaciones'].value,
        date: this.dateNow.getFullYear()+'-'+ this.mesString+'-'+ this.diaString,
        time: citaTemp.hora,
        medico: citaTemp.id,
        paciente: this.paciente.id
      }

    }

    creteCita(){
      this.citaService.createCita(this.cita).subscribe(
        {
          next: () =>{
            this.cogerPaciente()
            this.router.navigateByUrl('/paciente/tab');
          }
        }
      );

    }

    // Coger la fecha y cambia las horas disponibles de la cita
  fechaCambiada(event: any) {
    this.diaHastaFinalDeMes = [];
    const fecha = new Date(event.detail.value);
    this.mes = fecha.getMonth() + 1 ;
    this.mesString = this.mes < 10 ? '0' + this.mes : this.mes.toString();


        // Los dos tiene misma funcion solo que uno se coge un dia más de este mes y otro se coge desde dia 1
    if(fecha.getMonth() == this.dateNow.getMonth()){
      this.getDiasHastaFinalDeMes()
    }else {
      this.getDiaPorMes(fecha);
    }
  }


  getDiaPorMes(date: Date) {
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    for (let day = 1 ; day <= endOfMonth.getDate(); day++) {
      this.diaHastaFinalDeMes.push(new Date(date.getFullYear(), date.getMonth(), day));
    }
  }

  // Lo mismo que anterior solo que si es este mes pues se sale los dias despues de hoy que viene
  getDiasHastaFinalDeMes() {
    const endOfMonth = new Date(this.dateNow.getFullYear(), this.dateNow.getMonth() + 1, 0);
    for (let day = this.dateNow.getDate() + 1 ; day <= endOfMonth.getDate(); day++) {
      this.diaHastaFinalDeMes.push(new Date(this.dateNow.getFullYear(), this.dateNow.getMonth(), day));
    }
  }

  cogerPaciente(){
    this.pacienteService.cogerPaciente(this.authService.currentUserValue!.email).subscribe(
      {
        next: value => {
          this.pacienteMain.setPaciente(value);
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }


}
