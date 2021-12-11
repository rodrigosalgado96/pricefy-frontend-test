import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

import { Promotion, PromotionAdapter } from 'src/app/shared/models/promotion.model';

const data: Promotion[] = [
  { id: 1,GTIN: '01234567890456', description: 'description', category: 'ELETRONICOS', regularPrice: 120, promotionalPrice: 129, startDate: '10/12/2021', endDate: '15/12/2022' },
  { id: 2,GTIN: '01234567890165', description: 'description', category: 'COMIDAS', regularPrice: 15, promotionalPrice: 30, startDate: '10/03/2021', endDate: '15/12/2022' },
  { id: 3,GTIN: '01234567890148', description: 'description', category: 'ELETRONICOS', regularPrice: 50, promotionalPrice: 80, startDate: '10/03/2021', endDate: '15/12/2022' },
  { id: 4,GTIN: '01234567890789', description: 'description', category: 'BEBIDAS', regularPrice: 1, promotionalPrice: 2, startDate: '10/03/2021', endDate: '15/12/2022' },
  { id: 5,GTIN: '01234567890758', description: 'description', category: 'ELETRONICOS', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/2021', endDate: '15/12/2022' },
  { id: 6,GTIN: '01234567890153', description: 'description', category: 'BEBIDAS', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/2021', endDate: '10/03/2021' },
  { id: 7,GTIN: '01234567890548', description: 'description', category: 'OUTROS', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/2021', endDate: '10/03/2021' },
  { id: 8,GTIN: '01234567890579', description: 'description', category: 'ELETRONICOS', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/2021', endDate: '10/03/2021' },
  { id: 9,GTIN: '01234567890123', description: 'description', category: 'COMIDAS', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/2021', endDate: '10/03/2021' },
];

const urlPromotion: string = 'localhost:3000/promotions'

@Injectable({
  providedIn: 'root',
})
export class PromotionService {

  constructor(private http: HttpClient, private promotionAdapter: PromotionAdapter) {}

  getAllPromotions(): Observable<Promotion[]> {
    // return this.http.get<Promotion[]>(`${urlPromotion}`).pipe(
    //   map((data: any[]) =>
    //     data.map((item) => this.promotionAdapter.adapt(item))
    //   )
    // );
    return of(data);
  }

  addPromotion(json: any){
    return this.http.post(`${urlPromotion}`, json)
  }

  editPromotion(id: number, json: any){
    return this.http.put(`${urlPromotion}/${id}`, json)
  }

  deletePromotion(id: number){
    return this.http.delete(`${urlPromotion}/${id}`)
  }
}
