import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UIChart } from 'primeng/chart/chart';
import { Price } from 'src/app/interfaces/price';
import { DaneSipsaService } from 'src/app/services/dane-sipsa.service';

@Component({
  selector: 'app-table-graph',
  templateUrl: './table-graph.component.html',
  styleUrls: ['./table-graph.component.scss']
})
export class TableGraphComponent implements OnInit {
  @ViewChild('chart') chart: UIChart = {} as UIChart;

  @Input()
  public set price(price: Price) {
    this.priceTag = price;
    let day = new Date();
    day.setDate(day.getDate() - 1);
    this.sipsaService.getProductPriceRecords(price.COD_ART, day).subscribe(resp => {
      let data = this.dataFormat();
      data.datasets[0].label = price.NOM_ART;
      resp.forEach(priceTag => {
        data.labels.push(priceTag.Date as never);
        data.datasets[0].data.push(priceTag.PROM_DIARIO as never);
      })
      this.data = data;
    })
  }

  priceTag: any;
  data: any;
  constructor(private sipsaService: DaneSipsaService) { }

  ngOnInit(): void {
    this.data = this.dataFormat()
  }

  dataFormat() {
    return {
      labels: [],
      datasets: [{
        label: '',
        data: [],
        fill: false,
        borderColor: '#42A5F5',
        tension: .4
      }]
    };
  }
}
