import { Component } from '@angular/core';
import { DUMMY_USERS } from '../users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
let test2: File;

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
    this.logTest();
  }

  logTest(){
    console.log(this.selectedUser);
  }
}