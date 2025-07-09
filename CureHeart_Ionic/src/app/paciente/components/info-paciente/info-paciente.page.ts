import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InformeService} from "../../../services/informe.service";
import {Informe} from "../../../interfaces/informe.interface";
import {PacienteMainPage} from "../../layout/paciente-main/paciente-main.page";
import {Paciente} from "../../../interfaces/paciente.interface";
import {Capacitor} from "@capacitor/core";
import {Directory, Encoding, Filesystem} from "@capacitor/filesystem";

@Component({
  selector: 'app-info-paciente',
  templateUrl: './info-paciente.page.html',
  styleUrls: ['./info-paciente.page.scss'],
})

// Visualiza los info que ha enviado por los medicos que puede cargar el pdf para ver el resultado
export class InfoPacientePage implements OnInit {

  informes: Informe[] = [];
  informe: Informe;
  archivoPDF: ArrayBuffer;
  nombre: string;
  paciente: Paciente;

  constructor(private infoService: InformeService, private main: PacienteMainPage) {
    this.paciente = this.main.paciente;
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
    this.infoService.getInfoByPacienteId(this.paciente.id).subscribe(
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
          date: new Date(),
          autor: this.paciente.nombre +' '+ this.paciente.apellido1,
          paciente: this.paciente.id,
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
