import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent {
  @Input() products: Product[] = [];
  @Output() selected: EventEmitter<Product[]> = new EventEmitter();
  public selectedProducts: Product[] = [];

  constructor() {}

  public search() {
    if (this.selectedProducts.length > 0) {
      this.selected.emit(this.selectedProducts)
    }
  }
}
