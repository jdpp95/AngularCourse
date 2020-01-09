import { NgModule } from '@angular/core';
import { FinishedFilterPipe } from './finished-filter.pipe';



@NgModule({
  declarations: [FinishedFilterPipe],
  exports: [FinishedFilterPipe]
})
export class PipesModule { }
