import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Paciente} from "../interfaces/paciente.interface";
import {Observable} from "rxjs";
import {Informe} from "../interfaces/informe.interface";

@Injectable({
  providedIn: 'root'
})
//Cambia lochalhost: a tu ip como en mi caso http://192.168.137.1: si quiere probar la api en emulador
export class InformeService {

  url = "http://192.168.137.1:3000/api/v1/informe"

  private http = inject(HttpClient);

  subirPdf(informe: Informe){
    return this.http.post(this.url+'/upload',informe)
  }

  downloadFile(id:number) {
    return this.http.get(this.url+'/'+id+'/download',{ responseType: 'blob' });
  }

  getInfoByPacienteId(id:number):Observable<Informe[]>{
    return this.http.get<Informe[]>(this.url+'/paciente/'+id)
  }


}
