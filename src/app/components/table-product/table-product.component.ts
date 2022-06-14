import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Price } from 'src/app/interfaces/price';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableProductComponent implements OnInit {
  @Input() prices: Price[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
