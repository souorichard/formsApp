import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StorageService } from '../services/storage.service';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { CpfPipe } from './cpf.pipe';

@NgModule({
  declarations: [HomePage, CpfPipe],
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  providers: [StorageService],
})
export class HomePageModule {}
