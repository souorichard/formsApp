import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { User } from './../models/User';
import { StorageService } from './../services/storage.service';
import { comparedValidator } from './../validators/compared-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister: FormGroup;
  user: User = new User();

  msgs = {
    name: [
      { type: 'required', msg: '*Campo obrigatório'},
    ],
    email: [
      { type: 'required', msg: '*Campo obrigatório' },
      { type: 'email', msg: '*E-mail inválido' }
    ],
    cpf: [
      { type: 'required', msg: '*Campo obrigatório'},
    ],
    password: [
      { type: 'required', msg: '*Campo obrigatório'},
      { type: 'minLength', msg: '*A senha deve te no mínimo 8 caracteres' }
    ],
    passwordConfirm: [
      { type: 'required', msg: '*Campo obrigatório'},
      { type: 'minLength', msg: '*A senha deve te no mínimo 8 caracteres' },
      { type: 'compared', msg: '*Deve ser igual a senha' }
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private storageService: StorageService,
    private router: Router
  ) {
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      cpf: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      passwordConfirm: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    }, {
      validator: comparedValidator('password', 'passwordConfirm')
    });
  }

  ngOnInit() {
  }

  async saveRegister() {
    if (this.formRegister.valid) {
      this.user.name = this.formRegister.value.name;
      this.user.email = this.formRegister.value.email;
      this.user.cpf = this.formRegister.value.cpf;
      this.user.password = this.formRegister.value.password;

      await this.storageService.set(this.user.email, this.user);

      this.router.navigateByUrl('/login');
    }
    else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ALERT!',
      message: 'Error in user register.',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
