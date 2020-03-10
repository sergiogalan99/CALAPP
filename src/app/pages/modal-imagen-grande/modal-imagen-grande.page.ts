import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-imagen-grande',
  templateUrl: './modal-imagen-grande.page.html',
  styleUrls: ['./modal-imagen-grande.page.scss'],
})
export class ModalImagenGrandePage implements OnInit {

  img: string;
  constructor(public modalCtrl: ModalController, public parametros: NavParams) {
    this.img = parametros.get('img');
  }


  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
