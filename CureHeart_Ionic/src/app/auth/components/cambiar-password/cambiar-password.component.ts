import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.scss'],
})
//Pagina para cambiar el password segun el correo escrito .
// Si el correo existe en base de datos pues se cambia con la nueva contraseña
export class CambiarPasswordComponent  implements OnInit {

  private fb = inject( FormBuilder );
  private router = inject( Router );
  private authService = inject( AuthService );

  public myform: FormGroup = this.fb.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  })

  isToastOpen = false;
  isToastOpen2 = false;

  constructor() { }

  ngOnInit() {
  }


  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  cambiarPassword() {
    const user = this.myform.value;
    const passwordChange = {
      password: user.password
    }

    this.authService.cambiarPassword(user.email,passwordChange).subscribe(
      {
        next: value => {
          this.isToastOpen2 = true;
          this.router.navigateByUrl('/auth/login')
        },
        error: err => {
          this.isToastOpen = true;
          console.log(err)
        }
      }
    );


  }

}
