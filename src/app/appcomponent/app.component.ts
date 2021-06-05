import { Component } from '@angular/core';

import { DataService } from '../data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Sakura';
  age: number = 19;
  
  users: string[];
  posts = [];

  constructor(private dataService: DataService){
    this.users = ['Minato Namikaze', 'Naruto Uzumaki', 'Nagato Uzumaki'];
    //dataService es un arreglo entonces lo recorremos con una funcion
    this.dataService.getData().subscribe(dataService => {
      this.posts = dataService
    })
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
