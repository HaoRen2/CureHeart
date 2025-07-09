import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Medico } from 'src/app/interfaces/medico.interface';
import { MedicoService } from 'src/app/services/medico.service';
import { Especialiad } from 'src/app/shared/datos/especialidad';
import { Horas } from 'src/app/shared/datos/horas';

@Component({
  selector: 'app-medico-gestion',
  templateUrl: './medico-gestion.page.html',
  styleUrls: ['./medico-gestion.page.scss'],
})

// Pagina para visualizar todos los medicos que existe en el base de datos
// También tiene función que cambia la especialidad o horario del medico
export class MedicoGestionPage implements OnInit {

  private medicoService = inject(MedicoService);
  medico: Medico[] = [];
  horario = Horas;
  valorSeleccionado: string;
  horaInicioSeleccionado: string;
  horaFinSeleccionado: string;

  @ViewChild(DatatableComponent) table!: DatatableComponent;
  ColumnMode = ColumnMode;
  loadingIndicator!: boolean;
  rows: any[] = [];
  especialidad = Especialiad

  constructor() {}

  ngOnInit() {
    this.cogerMedico()
  }

  cogerMedico(){
    this.loadingIndicator = true;
    this.medicoService.getAllMedico().subscribe(
      {
        next: value => {
          this.medico = value.filter( (v)=> v.horario != null);
          this.rows = [...this.medico];

        },error: (message)=> {
          console.log(message)
        }
      }
    )
    this.loadingIndicator = false;
  }

  updateFilter(event: any) {
    const val = event.detail.value.toLowerCase();

    // filtrar nuestro datos
    const temp = this.medico.filter((d: any) => {
      return d.nombre.toLowerCase().indexOf(val) !== -1 ||
             d.genero.toLowerCase().indexOf(val) !== -1 ||
             !val;
    });

    // actualizar el rows
    this.rows = temp;
    // Siempre que cambie el filtro, vuelva siempre a la primera página.
    this.table.offset = 0;
  }

  edit(row: Medico) {

    if (this.valorSeleccionado){
      const dto = {
        especialidad: this.valorSeleccionado,

      }
      this.medicoService.updateMedico(row.id, dto).subscribe();
    }

    if (this.horaInicioSeleccionado || this.horaFinSeleccionado){
      const horarioDto = {
        horaInicio : this.horaInicioSeleccionado,
        horaFin: this.horaFinSeleccionado,

      }
      this.medicoService.updateHorario(row.horario.id,horarioDto).subscribe();
    }

    this.cogerMedico()

  }

  cambiaEspecialidad(event: any){
    this.valorSeleccionado = event.detail.value;
  }

  cambiaHoraInicio(event: any){
    this.horaInicioSeleccionado = event.detail.value;
  }

  cambiaHoraFin(event: any){
    this.horaFinSeleccionado = event.detail.value;
  }


}
