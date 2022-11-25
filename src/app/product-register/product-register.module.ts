import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductRegisterPageRoutingModule } from './product-register-routing.module';
import { ProductRegisterPage } from './product-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProductRegisterPageRoutingModule
  ],
  declarations: [ProductRegisterPage]
})
export class ProductRegisterPageModule {}
