import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AlertController, IonModal } from '@ionic/angular';
import { Cima } from 'src/app/interfaces/cimaApi.interface';
import { Informe } from 'src/app/interfaces/informe.interface';
import { Medicamento, MiMedicamento } from 'src/app/interfaces/medicamento.interface';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { InformeService } from 'src/app/services/informe.service';
import { MedicamentoService } from 'src/app/services/medicamento.service';
import { MedicoMainPage } from '../../layout/medico-main/medico-main.page';
import { Medico } from 'src/app/interfaces/medico.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicamento-medico',
  templateUrl: './medicamento-medico.page.html',
  styleUrls: ['./medicamento-medico.page.scss'],
})

// Mismo que medicamento-paciente solo que se coge el id de paciente en el router
// Silve para gestionar los medicamentos de la paciente
export class MedicamentoMedicoPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  private medicamentoService = inject(MedicamentoService);

  medico: Medico;
  medicamento: Medicamento[] = [];
  miDieta: MiMedicamento[] = [];

  selectedSegment: string;
  cimaApi: Cima;

  isModalOpen = false;
  dto: MiMedicamento;

  miInput: string;
  id: string

  constructor(private medicoMain: MedicoMainPage, private alertController: AlertController, private activatedroute: ActivatedRoute) {
    this.medico = this.medicoMain.medico;
    this.id = this.activatedroute.snapshot.paramMap.get('id')!;

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
         paciente: +this.id
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
       this.createMidieta(this.dto)
    }
    this.isModalOpen = false;

  }

  createMidieta(dto: MiMedicamento){
    this.medicamentoService.createMiDieta(dto).subscribe(
      {
        next: value => {
          this.cogerDieta();
        }
      }
    );
  }

  cogerDieta(){
    this.medicamentoService.getMiDieta(+this.id).subscribe(
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
    console.log(id)
    this.medicamentoService.deleteMidieta(id).subscribe(
      {
        next:() => this.cogerDieta()
      }
     );
  }


}
