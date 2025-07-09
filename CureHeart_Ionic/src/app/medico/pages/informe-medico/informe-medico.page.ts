import { Component, OnInit, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { IonModal } from '@ionic/angular';
import { Informe } from 'src/app/interfaces/informe.interface';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { InformeService } from 'src/app/services/informe.service';
import { MedicoMainPage } from '../../layout/medico-main/medico-main.page';
import { Medico } from 'src/app/interfaces/medico.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informe-medico',
  templateUrl: './informe-medico.page.html',
  styleUrls: ['./informe-medico.page.scss'],
})

// Mismo que informe-paciente solo que se coge el id de paciente en el router
export class InformeMedicoPage implements OnInit {

  informes: Informe[] = [];
  informe: Informe;
  archivoPDF: ArrayBuffer;
  nombre: string;
  medico: Medico;
  id: string;

  constructor(private infoService: InformeService, private main: MedicoMainPage, private activatedroute: ActivatedRoute) {
    this.medico = this.main.medico;
    this.id = this.activatedroute.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.cogerInformes();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.nombre = event.target.files[0].name;
    this.convertFileToArrayBuffer(file);

  }

  cogerInformes(){
    this.infoService.getInfoByPacienteId(+this.id).subscribe(
      {
        next: value => {
          this.informes = value
        },
        error: err => console.log(err)
      }

    )
  }

  convertFileToArrayBuffer = (file: File) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      this.archivoPDF = reader.result as ArrayBuffer;
      let b64: string = btoa(new Uint8Array(this.archivoPDF).reduce((data, byte) => data + String.fromCharCode(byte), ''));
      if (this.archivoPDF) {
        this.informe = {
          name: this.nombre,
          autor: this.medico.nombre + ' ' + this.medico.apellido1,
          date: new Date(),
          paciente: +this.id,
          datos: b64
        };
      } else {
        console.log('error')
      }
    };

  }

  enviarInforme() {
    this.infoService.subirPdf(this.informe)
      .subscribe({
        next: value => {
          this.cogerInformes()
        }, error: err => {
          console.log(err)
        }

      });
  }

  descargarPdf(informe: Informe) {
    this.infoService.downloadFile(informe.id!).subscribe({
      next: async (value) => {
        const blob = new Blob([value], {type: 'application/pdf'});
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');

        const base64Data = await this.convertBlobToBase64(blob) as string;

        // Código específico para android
        if (Capacitor.getPlatform() === 'android') {
          try {
            await Filesystem.writeFile({
              path: `${informe.name}.pdf`,
              data: base64Data,
              directory: Directory.Documents,
              encoding: Encoding.UTF8,
            });
            console.log('Archivo escrito correctamente');
          } catch (error) {
            console.error('Error al escribir el archivo:', error);
          }

        } else if (Capacitor.getPlatform() === 'web') {
          // Código específico para la web
          link.href = downloadUrl;
          link.download = `${informe.name}`;
          link.click();
        }

      },
      error: err => {
        console.error('Error al descargar el archivo:', err);
      }
    })

  }

  private convertBlobToBase64(blob: Blob): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
}
