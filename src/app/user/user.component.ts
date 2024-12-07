import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) avatar! : string;
  @Input({required: true}) name! : string; 

  constructor() {
  }

  get imagePath(){
    return `assets/img/users/${this.avatar}`;
  }

  onSelectUser(){

  }

}
