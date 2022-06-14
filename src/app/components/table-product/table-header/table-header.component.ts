import { Component, Input, OnInit } from '@angular/core';
import { Price } from 'src/app/interfaces/price';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {
  @Input() price: Price = {} as Price;
  constructor() { }

  ngOnInit(): void {
  }

}
