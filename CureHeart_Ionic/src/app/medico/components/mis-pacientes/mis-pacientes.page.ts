import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { PacienteService } from 'src/app/services/paciente.service';
import { MedicoMainPage } from '../../layout/medico-main/medico-main.page';
import { Medico } from 'src/app/interfaces/medico.interface';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-pacientes',
  templateUrl: './mis-pacientes.page.html',
  styleUrls: ['./mis-pacientes.page.scss'],
})
export class MisPacientesPage implements OnInit {

  private pacienteService = inject(PacienteService);
  private router = inject(Router)

  @ViewChild(DatatableComponent) table!: DatatableComponent;
  ColumnMode = ColumnMode;
  loadingIndicator!: boolean;
  rows: any[] = [];

  medico: Medico;
  paciente: Paciente[] = [];

  constructor(public medicoMain: MedicoMainPage) {
    this.medico = medicoMain.medico;
  }

  ngOnInit() {
    this.cogerPacienteRelacionado();

  }

  updateFilter(event: any) {
    const val = event.detail.value.toLowerCase();

    // filtrar nuestro datos
    const temp = this.paciente.filter((d: Paciente) => {
      return d.apellido1.toLowerCase().indexOf(val) !== -1 ||
             d.nombre.toLowerCase().indexOf(val) !== -1 ||
             !val;
    });

    // update the rows
    this.rows = temp;
    // Cuando cambia vuelve a pagina 1
    this.table.offset = 0;
  }

  cogerPacienteRelacionado(){
    this.loadingIndicator = true;

    this.pacienteService.getByMedicoId(this.medico.id).subscribe(
      {
        next: value => {
          this.paciente = value;
          this.rows = [...this.paciente];
        }
      }
    )
    this.loadingIndicator = false;

  }

  medicamento(row: any) {
    this.router.navigateByUrl('medico/medicamento-medico/'+row.id)
  }

  informe(row: any) {
    this.router.navigateByUrl('medico/informe-medico/'+row.id)
  }

}
