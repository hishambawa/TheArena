import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './filter/filter.pipe';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    FilterComponent,
    FilterPipe,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbCarouselModule
  ],
  exports: [
    ListComponent
  ]
})
export class ProductModule { }
