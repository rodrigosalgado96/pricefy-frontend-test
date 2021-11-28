import { Component } from '@angular/core';
import { Promotion } from './shared/models/promotion.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: Promotion[] = [
    { GTIN: '001', description: 'aaa', category: 'aaa', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/96', endDate: '10/03/21' },
    { GTIN: '001', description: 'aaa', category: 'aaa', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/96', endDate: '10/03/21' },
    { GTIN: '001', description: 'aaa', category: 'aaa', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/96', endDate: '10/03/21' },
    { GTIN: '001', description: 'aaa', category: 'aaa', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/96', endDate: '10/03/21' },
    { GTIN: '001', description: 'aaa', category: 'aaa', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/96', endDate: '10/03/21' },
    { GTIN: '001', description: 'aaa', category: 'aaa', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/96', endDate: '10/03/21' },
    { GTIN: '001', description: 'aaa', category: 'aaa', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/96', endDate: '10/03/21' },
    { GTIN: '001', description: 'aaa', category: 'aaa', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/96', endDate: '10/03/21' },
    { GTIN: '001', description: 'aaa', category: 'aaa', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/96', endDate: '10/03/21' },
    { GTIN: '001', description: 'aaa', category: 'aaa', regularPrice: 123, promotionalPrice: 123, startDate: '10/03/96', endDate: '10/03/21' },
  ];
  displayedColumns: string[] = ['gtin', 'description', 'category', 'regularPrice', 'promotionalPrice', 'startDate', 'endDate'];
}


/*
GTIN: string,
descriiption: string,
category: string,
regularPrice: number,
promotionalPrice: number,
startDate: string,
endDate: string,

GTIN (14 caracteres);
Descrição completa (100 caracteres);
Categoria (lista de opções: eletronicos, bebidas, cereais, etc);
Preço regular (valor monetário);
Preço promocional (valor monetário);
Data de inicial da promoção (data dd/mm/aaaa);
Data de final da promoção (data dd/mm/aaaa).
*/