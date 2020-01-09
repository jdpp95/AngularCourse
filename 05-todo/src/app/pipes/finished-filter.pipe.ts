import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'finishedFilter',
  pure: false
})
export class FinishedFilterPipe implements PipeTransform {

  transform(lists: List[], finished = true): List[] {
    return lists.filter(list => list.completed == finished);
  }

}
