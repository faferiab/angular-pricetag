import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Price } from '../interfaces/price';
import { Product } from '../interfaces/product';

enum PERIODICITY {
  WEEKLY = 'week',
  DAILY = 'day'
}

@Injectable({
  providedIn: 'root'
})
export class DaneSipsaService {
  private readonly baseUrl = 'https://sen.dane.gov.co/variacionPrecioMayoristaSipsa_ws/rest/SipsaServices/'
  constructor(private http: HttpClient) { }

  public listProducts(): Observable<Product[]> {
    const url = this.baseUrl + 'selectAllProductsByCity/11001'
    return this.http.get<Product[]>(url);
  }

  public getProductPriceDay(productCode: string, day: Date): Observable<Price[]> {
    const url = this.baseUrl + 'selectAllInfoProduct/'
    const endDate = this.dateToString(day)
    let pastDay = new Date(day)
    pastDay.setDate(pastDay.getDate() - 1)
    const initDate = this.dateToString(pastDay)
    const params = {
      ...this.getParameters(PERIODICITY.DAILY, productCode),
      "fechaIni": initDate,
      "fechaFin": endDate
    }
    return this.http.post<Price[]>(url, params);
  }

  public getProductPriceRecords(productCode: string, day: Date): Observable<Price[]> {
    const url = this.baseUrl + 'selectAllInfoProduct/'
    const endDate = this.dateToString(day)
    let pastDay = new Date(day)
    pastDay.setMonth(pastDay.getMonth() - 6)
    const initDate = this.dateToString(pastDay)
    const params = {
      ...this.getParameters(PERIODICITY.WEEKLY, productCode),
      "fechaIni": initDate,
      "fechaFin": endDate
    }
    return this.http.post<Price[]>(url, params);
  }

  private dateToString(date: Date): string {
    return `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}`
  }

  private getParameters(periosdicity: PERIODICITY, productCode: string) {
    return {
      "depcod": "11",
      "codmun": "11001",
      "codart": productCode,
      "archivoCsv": "1111001" + productCode,
      "fechaIni": "",
      "fechaFin": "",
      "tipoReporte": periosdicity
    }
  }
}
