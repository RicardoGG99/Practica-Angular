import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: string[];
  name: string = 'Sakura';
  age: number = 19;

  constructor(){
    this.users = ['Minato Namikaze', 'Naruto Uzumaki', 'Nagato Uzumaki']
  }

  addUser(newUser){
    this.users.push(newUser.value)
    newUser.value = '';
    newUser.focus()
    return false; //Cancela el reseteo de la pag
  }

  deleteUser(user){
    for(let i =0; i < this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i, 1)
      }
    }
  }
}
