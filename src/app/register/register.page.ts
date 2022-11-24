import { comparedValidator } from './../validators/compared-validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister: FormGroup;

  msg = {
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

  constructor( private formBuilder: FormBuilder ) {
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

  saveRegister() {
    console.log('Formulário', this.formRegister.valid);
  }

}
