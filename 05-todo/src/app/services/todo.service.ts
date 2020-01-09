import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { Logs } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lists:  List[] = []

  constructor() { 
    this.loadStorage();
    console.log(this.lists);
  }

  createList(title:string) {
    const newList = new List(title);
    this.lists.push(newList);
    this.saveStorage();
    return newList.id;
  }

  getList(id : string | number)
  {
    id = Number(id);

    return this.lists.find(listData => id === listData.id);
  }

  saveStorage(){
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage(){

    if(localStorage.getItem('data')){
      this.lists = JSON.parse(localStorage.getItem('data'));
    } else {
      this.lists = [];
    }
  }

  deleteList(list:List){
    const index = this.lists.indexOf(list); 
    this.lists.splice(index,1);
    this.saveStorage();
  }
}
