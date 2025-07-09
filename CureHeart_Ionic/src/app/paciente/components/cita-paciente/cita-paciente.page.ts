import { Component, OnInit, inject } from '@angular/core';
import { Cita, Paciente } from 'src/app/interfaces/paciente.interface';
import { PacienteMainPage } from '../../layout/paciente-main/paciente-main.page';
import { CitaService } from 'src/app/services/cita.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-cita-paciente',
  templateUrl: './cita-paciente.page.html',
  styleUrls: ['./cita-paciente.page.scss'],
})

// Pagina para que el paciente puede visualizar sus citas.
// La variable citas trae todas las citas que esta cumplido para que visualiza en la historial
export class CitaPacientePage implements OnInit {

  private citaService = inject(CitaService);
  private authService = inject(AuthService);
  private pacienteService = inject(PacienteService);
  citas: Cita[] = [];
  paciente: Paciente;
  selectedSegment: string;


  constructor(public pacienteMain: PacienteMainPage, private alertController: AlertController) {
    pacienteMain.value$.subscribe(
      {
        next: value => this.paciente = value
      }
    );
    this.cogerCitasHistorial();
   }

  ngOnInit() {
    this.selectedSegment = "default"
  }

  setResult(event: any,id: number|undefined) {
    if(event.detail.role == 'confirm'){
      this.citaService.deleteCita(id!).subscribe()
    }else{
      return;
    }
}


  anular(id: number|undefined) {
    this.citaService.deleteCita(id!).subscribe(
      {
        next: ()=> {
          this.cogerPaciente()
        }
      }
    )
    }

    cogerCitasHistorial(){
      this.citaService.getCitaPaciente(this.paciente.id).subscribe(
        {
          next: value => {
            this.citas = value.filter(v => v.cumplido == true);

          },
          error: err => {
            console.log(err)
          }
        }
      )
    }

    async presentAlert(id: number| undefined) {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Estas seguro de anular esta cita',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          } } ,
          {
          text: 'Ok',
          handler: () => {
          this.anular(id!)
          } } ]
      });

      await alert.present();
    }

    cogerPaciente(){
      this.pacienteService.cogerPaciente(this.authService.currentUserValue!.email).subscribe(
        {
          next: value => {
            this.pacienteMain.setPaciente(value)
          },
          error: (err) => {
            console.log(err)
          }
        }
      )
    }



}
