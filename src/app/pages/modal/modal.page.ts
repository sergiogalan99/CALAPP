import { Puestotrabajo } from './../../core/model/PuestoTrabajo';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  puesto: Puestotrabajo;
  constructor(public modalCtrl: ModalController, public parametros: NavParams) {
    this.puesto = parametros.get('puesto');
  }


  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}




