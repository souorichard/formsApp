import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {

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
