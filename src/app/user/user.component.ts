import { Component } from '@angular/core';
import { DUMMY_USERS } from '../users';

let test2: File;
const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  selectedUser = DUMMY_USERS[randomUserIndex];

  constructor() {
  }

  get imagePath(){
    return `assets/img/users/${this.selectedUser.avatar}`;
  }

  onSelectUser(){
    const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomUserIndex];
  }
}
