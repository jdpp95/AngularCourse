import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AlertController, IonList } from '@ionic/angular';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  lists : List[];

  @ViewChild (IonList, null) listView: IonList;
  @Input() finished = true;

  constructor(
    public todoService: TodoService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.lists = todoService.lists;
   }

  ngOnInit() {}

  listSelected(list: List){

    if(this.finished) {
      this.router.navigateByUrl(`tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/add/${list.id}`);
    }
  }

  deleteList(list : List){
    this.todoService.deleteList(list);
  }

  async editList(list : List) {
    
    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.listView.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          handler: (data) => {
            if(data.title.length === 0) {
              return;
            }

            list.title = data.title;
            this.todoService.saveStorage();
            this.listView.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }

}
