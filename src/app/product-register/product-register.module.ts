import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductRegisterPageRoutingModule } from './product-register-routing.module';

import { ProductRegisterPage } from './product-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductRegisterPageRoutingModule
  ],
  declarations: [ProductRegisterPage]
})
export class ProductRegisterPageModule {}
