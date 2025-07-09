import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/interfaces/medico.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MedicoMainPage } from '../../layout/medico-main/medico-main.page';

@Component({
  selector: 'app-inicio-medico',
  templateUrl: './inicio-medico.page.html',
  styleUrls: ['./inicio-medico.page.scss'],
})
export class InicioMedicoPage implements OnInit {

  medico: Medico;
  constructor(private authService: AuthService, private medicoMain: MedicoMainPage) {
    this.medicoMain.value$.subscribe(
      {
        next: value => {
          this.medico = value
        }
      }
    )
  }

  ngOnInit() {
  }

  logOut() {
    this.authService.clearUser();
  }

}
