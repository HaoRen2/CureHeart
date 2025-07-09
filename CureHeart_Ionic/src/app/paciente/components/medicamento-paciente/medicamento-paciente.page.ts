import {Component, OnInit, inject, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Medicamento } from 'src/app/interfaces/medicamento.interface';
import { MedicamentoService } from 'src/app/services/medicamento.service';
import {Cima} from "../../../interfaces/cimaApi.interface";
import {AlertController, IonModal} from "@ionic/angular";
import { MiMedicamento } from '../../../interfaces/medicamento.interface';
import { PacienteMainPage } from '../../layout/paciente-main/paciente-main.page';
import { Paciente } from 'src/app/interfaces/paciente.interface';

@Component({
  selector: 'app-medicamento-paciente',
  templateUrl: './medicamento-paciente.page.html',
  styleUrls: ['./medicamento-paciente.page.scss'],
})
  // Pagina para gestionar los diferentes medicamentos que esta tomando el paciente
  // Se busca los medicamentos en mi base de datos en la tabla medicamento que ha traido por un csv de cima api
  // como que solo tiene el endpoint de medicamento particular y busca
  // y despues coge la informacion de la api cima y guarda en el base de datos de dietas-med del paciente;

export class MedicamentoPacientePage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  private medicamentoService = inject(MedicamentoService);
  paciente: Paciente;
  medicamento: Medicamento[] = [];
  miDieta: MiMedicamento[] = [];
  selectedSegment: string;
  cimaApi: Cima;
  isModalOpen = false;
  dto: MiMedicamento;
  miInput: string;

  constructor(private pacienteMain: PacienteMainPage, private alertController: AlertController) {
    this.paciente = this.pacienteMain.paciente;

  }

  ngOnInit() {
    this.selectedSegment = "default";
    this.cogerDieta();
  }

  onInput(event: any) {
    this.updateFilter(event.detail.value)
    }

  updateFilter(nombre: string) {
    this.medicamentoService.getMedicamento(nombre).subscribe(
      {
        next: value => {
          this.medicamento = value;
        },error:(message)=>{
          console.log(message)
        }
      }
    )
  }

  // Llamar la api de cima y coge el valor
  detalle(numRegistro: string) {

    this.medicamentoService.getCima(numRegistro).subscribe(
      {
        next: value => {
          this.cimaApi = value;
          this.isModalOpen = true;
        }
      }
    );
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(ev: any) {
    if (ev.detail.role === 'confirm') {
        this.dto = {
         nombre: this.cimaApi.nombre,
         laboratorio: this.cimaApi.labtitular,
         foto: '',
         dosis: this.cimaApi.dosis,
         observacion: '',
         afectaConduccion: this.cimaApi.conduc,
         linkhtml: '',
         paciente: this.paciente.id
       }
       //Puede ser que no existe los siguientes casos
       if(this.cimaApi.docs){
        this.dto.linkhtml = this.cimaApi.docs[0].url;
       }

       if(this.cimaApi.fotos){
        this.dto.foto = this.cimaApi.fotos[0].url
       }
       if(this.miInput && this.miInput.length > 0){
        this.dto.observacion = this.miInput
       }
       this.creteMidieta(this.dto)
    }
    this.isModalOpen = false;

  }

  creteMidieta(dto: MiMedicamento){
    this.medicamentoService.createMiDieta(dto).subscribe(
      {
        next: value => {
          this.cogerDieta();
        }
      }
    );
  }

  cogerDieta(){
    this.medicamentoService.getMiDieta(this.paciente.id).subscribe(
      {
        next: value => {
          this.miDieta = value
        },error: (message) => {
          console.log(message)
        }
      }
    )
  }

  async presentAlert(id: number| undefined) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Estas seguro de eliminar este medicamento',
      buttons: [{
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {

        } } ,
        {
        text: 'Sí',
        handler: () => {
        this.eliminarDieta(id!)
        } } ]
    });

    await alert.present();
  }

  eliminarDieta(id: number){
    this.medicamentoService.deleteMidieta(id).subscribe(
      {
        next: value => {
          this.cogerDieta()
        }
      }
    );
  }


}
