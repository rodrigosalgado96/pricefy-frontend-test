export class Promotion {
    constructor(
        public GTIN: string,
        public description: string,
        public category: string,
        public regularPrice: number,
        public promotionalPrice: number,
        public startDate: string,
        public endDate: string,
    ) { }
}

/*
GTIN (14 caracteres);
Descrição completa (100 caracteres);
Categoria (lista de opções: eletronicos, bebidas, cereais, etc);
Preço regular (valor monetário);
Preço promocional (valor monetário);
Data de inicial da promoção (data dd/mm/aaaa);
Data de final da promoção (data dd/mm/aaaa).
*/

//   @Injectable({
//     providedIn: 'root'
//   })
//   export class PostsAdapter implements Adapter<Posts> {
//     adapt(item: any): Posts {
//       return new Posts(
//         item._id,
//         item.title,
//         item.description
//       );
//     }
//   }
