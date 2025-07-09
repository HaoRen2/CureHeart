import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Medicamento, MiMedicamento} from "../interfaces/medicamento.interface";
import {Cima} from "../interfaces/cimaApi.interface";

@Injectable({
  providedIn: 'root'
})
//Cambia lochalhost: a tu ip como en mi caso http://192.168.137.1: si quiere probar la api en emulador
export class MedicamentoService {

  url = "http://localhost:3000/api/v1/medicamento";
  urlDieta = "http://localhost:3000/api/v1/dietas-med";
  urlCima = "https://cima.aemps.es/cima/rest/medicamento?nregistro=";
  constructor(private http: HttpClient) { }

  getMedicamento(name:string): Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>("http://localhost:3000/api/v1/medicamento"+'/'+name);
  }

  getCima(nregistro: string): Observable<Cima>{
    return this.http.get<Cima>("https://cima.aemps.es/cima/rest/medicamento?nregistro="+nregistro)
  }

  createMiDieta(dto: MiMedicamento){
    return this.http.post(this.urlDieta, dto)
  }

  getMiDieta(id: number): Observable<MiMedicamento[]>{
    return this.http.get<MiMedicamento[]>(this.urlDieta+'/paciente/'+id)
  }

  deleteMidieta(id: number){
    return this.http.delete(this.urlDieta+'/'+id)
  }


}
