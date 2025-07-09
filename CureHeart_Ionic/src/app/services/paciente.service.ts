import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import {Paciente} from "../interfaces/paciente.interface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Cambia lochalhost: a tu ip como en mi caso http://192.168.137.1: si quiere probar la api en emulador
export class PacienteService {
  // http://192.168.137.1:


  url = "http://lochalhost:3000/api/v1/paciente"

  private http = inject(HttpClient);

  crearPaciente(paciente: Paciente){
    return this.http.post(this.url,paciente)
  }

  cogerPaciente(email:string): Observable<Paciente>{
    return this.http.get<Paciente>(this.url+'/email/'+email)
  }

  getByMedicoId(id: number): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url+'/medico/'+id);
  }




}
