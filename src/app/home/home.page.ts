import { Component, OnInit } from '@angular/core';

import { User } from '../models/User';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listUsers: User[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit() {
  }

  async searchUsers() {
    this.listUsers = (await this.storageService.getAll()) as User[];
  }

  ionViewDidEnter() {
    this.searchUsers();
  }

  async deleteUser(email: string) {
    this.storageService.remove(email);
  }

}
