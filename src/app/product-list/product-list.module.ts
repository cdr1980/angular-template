import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forRoot([{ path: '/', component: ProductListComponent }]),
  ],
  declarations: [ProductListComponent],
})
export class ProductListModule {}
