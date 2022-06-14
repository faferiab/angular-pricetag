import { Component } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { Price } from './interfaces/price';
import { Product } from './interfaces/product';
import { DaneSipsaService } from './services/dane-sipsa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pricetag';
  listProducts: Product[] = []
  listPrices: Price[] = []

  constructor(private sipsaService: DaneSipsaService) {
    this.sipsaService.listProducts().subscribe(products => {
      this.listProducts = products
    })
  }

  public searchProducts(products: Product[]) {
    let day = new Date();
    day.setDate(day.getDate() - 1);
    forkJoin(
      products.map(product => this.sipsaService.getProductPriceDay(product.COD_ART, day)
        .pipe(map(res => res[res.length - 1] || [])))
    ).subscribe(result => {
      this.listPrices = result.flat();      
    })
  }
}
