import { Component, OnInit, inject } from '@angular/core';
import { MedicoMainPage } from '../../layout/medico-main/medico-main.page';
import { Cita, Medico } from 'src/app/interfaces/medico.interface';
import { MedicoService } from 'src/app/services/medico.service';
import { AlertController } from '@ionic/angular';
import { CitaService } from 'src/app/services/cita.service';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-medico-horario',
  templateUrl: './medico-horario.page.html',
  styleUrls: ['./medico-horario.page.scss'],
})

//Visualiza las Citas que ha hecho para este medico y es él que se puede decir que ha cumplido o no la cita
export class MedicoHorarioPage implements OnInit {
  private authService = inject(AuthService);
  private medicoService = inject(MedicoService);
  private citaService = inject(CitaService);
  fechaString = "";
  citas: Cita[] = [];
  medico: Medico;
  dateNow = new Date();
  diaHastaFinalDeMes: Date[] = [];

  constructor(public medicoMain: MedicoMainPage, private alertController: AlertController) {
    this.medicoMain.value$.subscribe(
      {
        next: value => this.medico = value
      }
    );

    this.getDiasHastaFinalDeMes();
    this.cogerFecha()

   }

  ngOnInit() {

  }

  cogerFecha(){
    const año = this.dateNow.getFullYear();
    const mes = ('0' + (this.dateNow.getMonth() )).slice(-2); // Agrega un cero al mes si es menor que 10
    const día = ('0' + this.dateNow.getDate()).slice(-2);
    this.fechaString = `${año}-${mes}-${día}`;
    this.citas = this.medico.citas.filter(m => m.date.toString() == this.fechaString)
  }

  async presentAlert(id: number| undefined) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: '¿Cita Finalizado?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {

        } } ,
        {
        text: 'Finalizar',
        handler: () => {
        this.cumplido(id!)
        } } ]
    });

    await alert.present();
  }

  cumplido(id: number) {
    let dto = {
      "cumplido": true
    }
    this.citaService.updateCita(id,dto).subscribe(
      {
        next: value => this.cogerMedico()
      }
    )
  }

  cogerDia(num: number) {
    const año = this.dateNow.getFullYear();
    const mes = ('0' + (this.dateNow.getMonth() + 1 )).slice(-2); // Agrega un cero al mes si es menor que 10
    const día = ('0' + num).slice(-2);
    this.fechaString = `${año}-${mes}-${día}`;
    this.citas = this.medico.citas.filter(m => m.date.toString() == this.fechaString)

    }

    getDiasHastaFinalDeMes() {
      const endOfMonth = new Date(this.dateNow.getFullYear(), this.dateNow.getMonth() + 1, 0);
      for (let day = this.dateNow.getDate() ; day <= endOfMonth.getDate(); day++) {
        this.diaHastaFinalDeMes.push(new Date(this.dateNow.getFullYear(), this.dateNow.getMonth(), day));
      }
    }

  cogerMedico(){
    this.medicoService.getMedico(this.authService.currentUserValue!.email).subscribe(
      {
        next: value => {
          this.medicoMain.setMedico(value)
          this.citas = this.medico.citas.filter(m => m.date.toString() == this.fechaString)
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }


}
