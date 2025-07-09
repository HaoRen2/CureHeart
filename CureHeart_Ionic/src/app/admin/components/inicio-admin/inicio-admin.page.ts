import { Component, OnInit } from '@angular/core';
import { PickerColumn, PickerColumnOption, PickerController, PickerOptions } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.page.html',
  styleUrls: ['./inicio-admin.page.scss'],
})
export class InicioAdminPage implements OnInit {


  constructor(private authservice: AuthService) {

  }

  ngOnInit() {
  }

  cerrarSesion() {
    this.authservice.clearUser();
    }


}
