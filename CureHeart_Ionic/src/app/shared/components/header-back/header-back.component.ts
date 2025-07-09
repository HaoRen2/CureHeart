import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent  implements OnInit {

  @Input() titulo!: string;

  constructor() { }

  ngOnInit() {}

}
