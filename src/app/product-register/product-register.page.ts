import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { StorageService } from '../services/storage.service';
import { Product } from './../models/Product';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.page.html',
  styleUrls: ['./product-register.page.scss'],
})
export class ProductRegisterPage implements OnInit {

  formProduct: FormGroup;
  product: Product = new Product();

  msgs = {
    name: [
      { type: 'required', msg: '*Campo obrigatório'},
    ],
    description: [
      { type: 'required', msg: '*Campo obrigatório'},
    ],
    validity: [
      { type: 'required', msg: '*Campo obrigatório'},
    ],
    price: [
      { type: 'required', msg: '*Campo obrigatório'},
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private storageService: StorageService,
    private router: Router
  ) {
    this.formProduct = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      validity: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  async saveProduct() {
    if (this.formProduct.valid) {
      this.product.name = this.formProduct.value.name;
      this.product.description = this.formProduct.value.description;
      this.product.validity = this.formProduct.value.validity;
      this.product.price = this.formProduct.value.price;

      await this.storageService.set(this.product.name, this.product);

      this.router.navigateByUrl('/login');
    }
    else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ALERT!',
      message: 'Error in register product.',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
