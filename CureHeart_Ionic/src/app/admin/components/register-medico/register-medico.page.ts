import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user-auth.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Especialiad } from '../../../shared/datos/especialidad';
import { MedicoService } from 'src/app/services/medico.service';
import { CreateMedico, Horario, Medico } from 'src/app/interfaces/medico.interface';
import { NavController } from '@ionic/angular';
import {Horas} from "../../../shared/datos/horas";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-medico',
  templateUrl: './register-medico.page.html',
  styleUrls: ['./register-medico.page.scss'],
})

//Pagina para registrar el usario de médico
export class RegisterMedicoPage implements OnInit {

  showCalendar: boolean;
  user:User;
  especialidad = Especialiad;
  horario = Horas;
  medico: CreateMedico;

  date = new Date().toISOString()
  private authService = inject(AuthService);
  private medicoService = inject(MedicoService);
  private router = inject(Router);

  private fb = inject(FormBuilder)

  public registerForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido1: ['',[Validators.required]],
    apellido2: ['',],
    fechaNacimiento: ['',[Validators.required]],
    telefono: ['',[Validators.required, Validators.minLength(9)]],
    genero: ['hombre',[Validators.required]],
    userEmail: [''],
    especialidad:['',[Validators.required]],
  });

  public authForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  public horarioForm: FormGroup = this.fb.group({
    horaInicio: ['', [Validators.required]],
    horaFin: ['', [Validators.required]],
  })

  constructor(private navCtrl: NavController) {
    this.showCalendar = false
   }

  ngOnInit() {}

  register() {
    this.user = {
      email: this.authForm.controls['email'].value,
      password: this.authForm.controls['password'].value
    }
    this.registerForm.controls['userEmail'].setValue(this.user.email);
    this.hacerLogin();
}

hacerLogin(){
  const horario: Horario = this.horarioForm.value;

  this.authService.registerMedico(this.user).subscribe(
    ()=> {
      this.medico = this.registerForm.value;
      this.medico.telefono = this.medico.telefono.toString();
      this.medicoService.crearHorario(horario).subscribe(
        {
          next: value => {
              this.medico.horario = value;
              this.router.navigateByUrl('/admin')
              this.crearMedico(this.medico)
          }
        }
      )
    }

  );
}

fechaCambiada(event: any) {
    this.registerForm.controls['fechaNacimiento'].setValue(new Date(event.detail.value));

  }

  crearMedico(medico: CreateMedico){
    this.medicoService.crearMedico(medico).subscribe(
      {
        next: value => {
          console.log(value)
        }
      }
    )
  }


  openCalendar() {
    this.showCalendar = true;
  }
  cancelCalendar() {
    this.showCalendar = false;
  }

  getFechaNacimiento(){
    return this.registerForm.controls['fechaNacimiento'].value;
  }

}
