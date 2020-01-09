import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/models/list-item.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  nameItem = '';

  constructor(
    private todoService : TodoService,
    private route: ActivatedRoute
  ) {
    const listId = this.route.snapshot.paramMap.get('listId');
    this.list = todoService.getList(listId);
   }

  ngOnInit() {
  }

  addItem(){
    if(this.nameItem.length === 0) return;

    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);

    this.nameItem = '';
    this.todoService.saveStorage();
  }

  checkChanged(item:ListItem)
  {
    const pending = this.list.items.filter(
      itemData => !itemData.completed
    ).length;

    if(pending === 0){
      this.list.finishedAt = new Date();
      this.list.completed = true;
    } else {
      this.list.finishedAt = null;
      this.list.completed = false;
    }

    console.log( this.list );

    this.todoService.saveStorage();
  }

  delete(index)
  {
    this.list.items.splice(index, 1);
    this.todoService.saveStorage();
  }

}
