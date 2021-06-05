import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' //Cliente para hacer peticiones desde Angular

//Importamos el interface
import { Post } from './Post'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('Service is working')
  }

  getData(){
    //Sacamos posts de una API
    //Va a retornar un Array de posts
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
