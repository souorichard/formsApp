import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StorageService } from '../services/storage.service';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  providers: [StorageService],
})
export class HomePageModule {}
