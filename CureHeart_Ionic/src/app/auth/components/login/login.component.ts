import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../../interfaces/user-auth.interface';
import {UserModel} from "../../../../model/user.model";
import {Storage} from "@capacitor/storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

//Pagina del login principal
export class LoginComponent  implements OnInit {

  private fb = inject( FormBuilder );
  private router = inject( Router );
  private authService = inject( AuthService );

  public myform: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  })

  isToastOpen = false;

  constructor() { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  login() {
    const user = this.myform.value;
    this.authService.login(user).subscribe(
      {
        next: () => {
          // La navegacion se hace dentro de authService
        },
        error: (message) => {
        this.isToastOpen = true;
        }
      },
    );
  }


}
