import { Injectable } from "@angular/core";
import { Adapter } from "src/app/core/adapter";

export class Sales {
  constructor(
    public id: number,
    public gtin: string,
    public description: string,
    public category: string,
    public regularPrice: number,
    public promotionalPrice: number,
    public startDate: string,
    public endDate: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class SalesAdapter implements Adapter<Sales> {
  adapt(item: any): Sales {
    const promotions = { ...item };
    return promotions;
  }
}
