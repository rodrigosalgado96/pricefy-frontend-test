import { Component, OnInit } from '@angular/core';
import { Promotion } from '../shared/models/promotion.model';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  addMode: boolean = false;
  editMode: boolean = false;

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

  constructor() { }

  ngOnInit(): void {

  }

  showEditForm(){
    this.editMode = !this.editMode;
  }

  showAddForm(){
    this.addMode = !this.addMode;
  }

  showTable(){
    this.addMode = false;
    this.editMode = false;
  }
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