import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  producstList: Iproduct[] = [];
  constructor() {
    //CatgoryID=1 =>Table ,CatgoryID=2 Chair ,CatgoryID=3 TV
    this.producstList = [
      {
        id: 1,
        name: 'Parque Wooden Top Coffee Table',
        price: 9999,
        quantity: 8,
        details:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem dolor maiores omnis deleniti saepe ad eos ipsam distinctio repudiandae?    Aperiam unde enim eos sapiente voluptas exercitationem optio error facilis',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/161036540-161036540-HC161018_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CatgoryID: 1,
      },
      {
        id: 2,
        name: 'Gasha Marble Top Coffee Table',
        price: 8929,
        quantity: 10,
        details:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem dolor maiores omnis deleniti saepe ad eos ipsam distinctio repudiandae?    Aperiam unde enim eos sapiente voluptas exercitationem optio error facilis',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/160079084-160079084-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CatgoryID: 1,
      },
      {
        id: 3,
        name: 'Weyline Coffee Table',
        price: 5999,
        quantity: 0,
        details:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem dolor maiores omnis deleniti saepe ad eos ipsam distinctio repudiandae?    Aperiam unde enim eos sapiente voluptas exercitationem optio error facilis',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/159592026-159592026-HCB1183OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CatgoryID: 1,
      },
      {
        id: 4,
        name: 'Victor Fabric Dining Chair',
        price: 7269,
        quantity: 8,
        details:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem dolor maiores omnis deleniti saepe ad eos ipsam distinctio repudiandae?    Aperiam unde enim eos sapiente voluptas exercitationem optio error facilis',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/161188677-161188677-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CatgoryID: 2,
      },
      {
        id: 5,
        name: 'Blend Dining Chair',
        price: 4079,
        quantity: 0,
        details:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem dolor maiores omnis deleniti saepe ad eos ipsam distinctio repudiandae?    Aperiam unde enim eos sapiente voluptas exercitationem optio error facilis',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/160823422-160823422-HC221118_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CatgoryID: 2,
      },
      {
        id: 6,
        name: 'Boston Fabric Dining Chair',
        price: 4049,
        quantity: 5,
        details:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem dolor maiores omnis deleniti saepe ad eos ipsam distinctio repudiandae?    Aperiam unde enim eos sapiente voluptas exercitationem optio error facilis',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/158489652-158489652-HCB650DEC16_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CatgoryID: 2,
      },
      {
        id: 7,
        name: 'Eterno TV Unit',
        price: 29999,
        quantity: 5,
        details:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem dolor maiores omnis deleniti saepe ad eos ipsam distinctio repudiandae?    Aperiam unde enim eos sapiente voluptas exercitationem optio error facilis',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/159664038-159664038-HCB1423MAR18_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CatgoryID: 3,
      },
      {
        id: 8,
        name: 'Yukon TV Unit',
        price: 12999,
        quantity: 9,
        details:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem dolor maiores omnis deleniti saepe ad eos ipsam distinctio repudiandae?    Aperiam unde enim eos sapiente voluptas exercitationem optio error facilis',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/161684476-161684476-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CatgoryID: 3,
      },
      {
        id: 9,
        name: 'Saturn TV Unit',
        price: 8499,
        quantity: 13,
        details:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem dolor maiores omnis deleniti saepe ad eos ipsam distinctio repudiandae?    Aperiam unde enim eos sapiente voluptas exercitationem optio error facilis',
        prdImgURL:
          'https://media.homecentre.com/i/homecentre/156234165-156234165-HC090418_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        CatgoryID: 3,
      }
    ];
  }

  getAllProducts(): Iproduct[] {
    return this.producstList;
  }

  performFilter(filterBy: number): Iproduct[] {
    return this.producstList.filter(function (productFilter: Iproduct) {
      if (productFilter.price == filterBy) return productFilter;
      else return 0;
    });
  }

  // day 4 task 1
  getProductsByCatID(catID: number): Iproduct[] {
    return this.producstList.filter((product) => product.CatgoryID == catID);
  }
  //get products by id
  getProductByID(prodID: number): Iproduct | undefined {
    return this.producstList.find((product) => product.id == prodID);
  }

//rutern array of products
getIdOfProducts():Number[]{

return this.producstList.map(product =>product.id);
}


}
