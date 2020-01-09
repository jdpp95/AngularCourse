import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private alertCtrl: AlertController,
    public todoService: TodoService,
    private router: Router,
  ) {
    //this.lists = todoService.lists;
  }

  async addList() {
    
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Cancel");
          }
        },
        {
          text: 'Crear',
          //role: 'cancel',
          handler: (data) => {
            if(data.title.length === 0) {
              return;
            }

            const listId = this.todoService.createList(data.title);
            this.router.navigateByUrl(`tabs/tab1/add/${listId}`);
          }
        }
      ]
    });

    alert.present();
  }
}
