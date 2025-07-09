import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  constructor(){}

  ngOnInit() {
    this.cargarComponentes();
  }

  private cargarComponentes() {

  }
}
