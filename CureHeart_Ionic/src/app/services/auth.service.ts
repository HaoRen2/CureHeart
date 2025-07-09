import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit, inject } from '@angular/core';
import { User } from '../interfaces/user-auth.interface';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { UserModel } from 'src/model/user.model';
import { Storage } from '@capacitor/storage';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
//Cambia lochalhost: a tu ip como en mi caso http://192.168.137.1: si quiere probar la api en emulador

//Servicio para hacer el login y guardar el usuario para que se puede verificar el role
export class AuthService implements OnInit, OnDestroy{

  url = "http://localhost:3000/api/v1/auth";
  keyUsuario = "usuario";
  usuario: UserModel

  private http = inject(HttpClient);
  private router = inject(Router);

  //! Al mundo exterior
  public currentUserSubject: BehaviorSubject<UserModel|null>;
  public currentUser: Observable<UserModel|null>;

    constructor(){
      this.currentUserSubject = new BehaviorSubject<any>(null);
      this.currentUser = this.currentUserSubject.asObservable();
      this.loadUserFromStorage();

    }
  ngOnDestroy(): void {
    App.removeAllListeners();
  }

  ngOnInit(): void {
     // Suscribirse al evento appStateChange que cuando cierra la aplicacion limpia el usuario
     App.addListener('appStateChange', (state) => {
      if (!state.isActive) {
        this.clearUser()
      }
    });
  }

  //Cargar el usuario que ha guardado en capacitor storage
    async loadUserFromStorage() {
      const user = await Storage.get({ key: this.keyUsuario });
      if (user && user.value) {
        this.currentUserSubject.next(JSON.parse(user.value));
      }
    }

    // Limpiar el usuario guardado y vuelve a pagina del login
    async clearUser() {
      this.currentUserSubject.next(null);
      await Storage.remove({ key: this.keyUsuario });
      this.router.navigateByUrl('/auth');
    }

    public get currentUserValue(): UserModel | null {
      return this.currentUserSubject.value;
    }

  public get getToken(): string {
    return this.currentUserSubject.value!.token;
  }

  login(user:User){
    return this.http.post<UserModel>(this.url+'/login',user).pipe(
      map( m =>  {
        this.guardarUsuario(m);
        if(m && m.role === 'paciente'){
          this.router.navigateByUrl('/paciente')
        }
        if(m && m.role === 'medico'){
          this.router.navigateByUrl('/medico')
        }
        if(m && m.role === 'admin'){
          this.router.navigateByUrl('/admin')
        }
      }),

      catchError( err => throwError( () => err.error.message )
      )
    )
  }
//Guardar el usuario logeado
 async guardarUsuario(usuario: UserModel) {
    await Storage.set({
      key: this.keyUsuario,
      value: JSON.stringify(usuario)
    });
    this.loadUserFromStorage();

  }

  cambiarPassword(email:string, password: any){
    return this.http.patch(this.url+'/email/'+email,password)
  }

  register(user: User){
   return  this.http.post(this.url+'/register',user)
  }

  registerMedico(user: User){
    return  this.http.post(this.url+'/register-medico',user)
  }

}
