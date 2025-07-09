import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createCita } from '../interfaces/createCita.interface';
import { Observable } from 'rxjs';
import { Cita } from '../interfaces/paciente.interface';

@Injectable({
  providedIn: 'root'
})
//Cambia lochalhost: a tu ip como en mi caso http://192.168.137.1: si quiere probar la api en emulador
export class CitaService {

  url = "http://localhost:3000/api/v1/citas"

  constructor(private http: HttpClient) { }

  createCita(cita:createCita){
    return this.http.post(this.url,cita);
  }

  getCitaPaciente(id: number):Observable<Cita[]> {
    return this.http.get<Cita[]>(this.url+'/paciente/'+id);
  }

  deleteCita(id: number){
    return this.http.delete(this.url+'/'+id)
  }

  updateCita(id: number,dto: any){
    return this.http.patch(this.url+'/'+id, dto)
  }
}
