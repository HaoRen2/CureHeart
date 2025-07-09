import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {CreateMedico, Horario, Medico} from '../interfaces/medico.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//Cambia lochalhost: a tu ip como en mi caso http://192.168.137.1: si quiere probar la api en emulador
export class MedicoService {

  private url = "http://localhost:3000/api/v1/medico";
  private urlHorario = "http://localhost:3000/api/v1/horario-medico";

  private http = inject(HttpClient);

  constructor() { }

  crearMedico(medico: CreateMedico): Observable<CreateMedico>{
    return this.http.post<CreateMedico>(this.url,medico)
  }

  crearHorario(horario: any): Observable<Horario>{
    return this.http.post<Horario>(this.urlHorario, horario);
  }

  cogerEspecialidad(): Observable<string[]>{
    return this.http.get<string[]>(this.url+'/especialidades')
  }

  cogerMedicoSegunEspecialidad(especialidad: string): Observable<Medico[]>{
    return this.http.get<Medico[]>(this.url+'/especialidad/'+especialidad)
  }

  getMedico(email:string): Observable<Medico>{
    return this.http.get<Medico>(this.url+"/email/"+email)
  }

  getAllMedico(): Observable<Medico[]>{
    return this.http.get<Medico[]>(this.url)
  }

  updateMedico(id: number,dto: any){
    return this.http.patch(this.url+'/'+id, dto)
  }

  updateHorario(id: number, dto:any) {
    return this.http.patch(this.urlHorario+'/'+id,dto)
  }





}
