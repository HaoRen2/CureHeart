import { Component, OnInit, inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../services/auth.service";
import {User} from "../../../interfaces/user-auth.interface";
import {PacienteService} from "../../../services/paciente.service";
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { Especialiad } from '../../../shared/datos/especialidad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

//Pagina de registrar que aquí solo puede registrase de role paciente
export class RegisterComponent  implements OnInit {

  private fb = inject(FormBuilder)
  private authService = inject(AuthService)
  private pacienteService = inject(PacienteService)
  private router = inject( Router );

  showCalendar: boolean;
  user:User;
  paciente: Paciente;

  date = new Date().toISOString()


  constructor(){
    this.showCalendar = false
  }

  ngOnInit() {

  }


  register() {
    this.user = {
      email: this.authForm.controls['email'].value,
      password: this.authForm.controls['password'].value
    }

    this.registerForm.controls['userEmail'].setValue(this.user.email);
    this.hacerLogin();
}

fechaCambiada(event: any) {
  this.registerForm.controls['fechaNacimiento'].setValue(new Date(event.detail.value));

}

  hacerLogin(){
    this.authService.register(this.user).subscribe();
    this.paciente = this.registerForm.value;
    this.paciente.telefono = this.paciente.telefono.toString();
    this.pacienteService.crearPaciente(this.paciente).subscribe(
      {
        next: value => {
          const user = this.authForm.value;
          this.login(user)
        }
      }
    );

  }

  login(user: any){
    this.authService.login(user).subscribe(
      {
        next: () => {
        },
        error: (message) => {
          console.log(message)
        }
      },
    );
  }

  public registerForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido1: ['',[Validators.required]],
    apellido2: [null],
    genero: ['hombre',[Validators.required]],
    telefono: ['',[Validators.required]],
    fechaNacimiento: [this.date,[Validators.required]],
    userEmail: ['']
  });

  getFechaNacimiento(){
    return this.registerForm.controls['fechaNacimiento'].value;
  }

  public authForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  openCalendar() {
    this.showCalendar = true;
  }
  cancelCalendar() {
    this.showCalendar = false;
  }

}
