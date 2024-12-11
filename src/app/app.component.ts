import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usersArray = DUMMY_USERS;
  selectedUserID = 'u1';

  onSelectedUser(id: string){
    this.selectedUserID = id ;
  }

  get selectedUser(){
    return this.usersArray.find(( user => user.id === this.selectedUserID))!;
  }

}
