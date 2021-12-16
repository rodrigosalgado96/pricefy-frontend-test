import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

import { Sales, SalesAdapter } from 'src/app/shared/models/sale.model';

const data: Sales[] = [
  { id: 1, gtin: '01234567890456', description: 'description', category: 'ELETRONICOS', regularPrice: 120, promotionalPrice: 129, startDate: '10/12/2021', endDate: '15/12/2022' },
  { id: 2, gtin: '01234567890165', description: 'description', category: 'COMIDAS', regularPrice: 15, promotionalPrice: 30, startDate: '10/03/2021', endDate: '15/12/2022' },
  { id: 3, gtin: '01234567890148', description: 'description', category: 'ELETRONICOS', regularPrice: 50, promotionalPrice: 80, startDate: '10/03/2021', endDate: '15/12/2022' },
  { id: 4, gtin: '01234567890789', description: 'description', category: 'BEBIDAS', regularPrice: 1, promotionalPrice: 2, startDate: '10/03/2021', endDate: '15/12/2022' },
  { id: 5, gtin: '01234567890758', description: 'description', category: 'ELETRONICOS', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/2021', endDate: '15/12/2022' },
  { id: 6, gtin: '01234567890153', description: 'description', category: 'BEBIDAS', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/2021', endDate: '10/03/2021' },
  { id: 7, gtin: '01234567890548', description: 'description', category: 'OUTROS', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/2021', endDate: '10/03/2021' },
  { id: 8, gtin: '01234567890579', description: 'description', category: 'ELETRONICOS', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/2021', endDate: '10/03/2021' },
  { id: 9, gtin: '01234567890123', description: 'description', category: 'COMIDAS', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/2021', endDate: '10/03/2021' },
];

const urlSales: string = 'api/sales'

@Injectable({
  providedIn: 'root',
})
export class SalesService {

  constructor(private http: HttpClient, private salesAdapter: SalesAdapter) {}

  getAllSales(): Observable<Sales[]> {
    return this.http.get<Sales[]>(`${urlSales}`).pipe(
      map((data: any[]) =>
        data.map((item) => this.salesAdapter.adapt(item))
      )
    );
    return of(data);
  }

  addSale(json: any){
    return this.http.post(`${urlSales}`, json)
  }

  editSale(id: number, json: any){
    return this.http.patch(`${urlSales}/${id}`, json)
  }

  deleteSale(id: number){
    return this.http.delete(`${urlSales}/${id}`)
  }
}
