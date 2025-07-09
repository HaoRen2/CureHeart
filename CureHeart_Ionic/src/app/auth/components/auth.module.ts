import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, CambiarPasswordComponent],
  exports: [LoginComponent, RegisterComponent, CambiarPasswordComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        IonicModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class AuthModule { }
