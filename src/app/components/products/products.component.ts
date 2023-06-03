import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CatgoryServiceService } from 'src/app/Services/catgory-service.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { Icatgory } from 'src/app/models/icatgory';
import { Iproduct } from 'src/app/models/iproduct';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  creditCardNumber  : string = "111122223333";
// producstList:Iproduct[]=[];
//filter
filterList:Iproduct[]=[];
private FilterPrice:number=0;
// task5 day5
categories :Icatgory [] = [];
//day 3 inject on constructor
//day 4 inject router service
//day 5
constructor(private productService: ProductsServiceService ,private router :Router, private catService : CatgoryServiceService , private prdApiService:ProductsApiService){
      //CatgoryID=1 =>Table ,CatgoryID=2 Chair ,CatgoryID=3 TV
//  this.producstList=[
//   {id:1,name:"Parque Wooden Top Coffee Table",price: 9999,quantity:5,prdImgURL:"https://media.homecentre.com/i/homecentre/161036540-161036540-HC161018_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",CatgoryID:1},
//   {id:2,name:"Gasha Marble Top Coffee Table",price:8929,quantity:1,prdImgURL:"https://media.homecentre.com/i/homecentre/160079084-160079084-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",CatgoryID:1},
//   {id:3,name:"Weyline Coffee Table",price:5999,quantity:0,prdImgURL:"https://media.homecentre.com/i/homecentre/159592026-159592026-HCB1183OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",CatgoryID:1},
//   {id:4,name:"Victor Fabric Dining Chair",price:7269,quantity:8,prdImgURL:"https://media.homecentre.com/i/homecentre/161188677-161188677-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",CatgoryID:2},
//   {id:5,name:"Blend Dining Chair",price:4079,quantity:0,prdImgURL:"https://media.homecentre.com/i/homecentre/160823422-160823422-HC221118_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",CatgoryID:2},
//   {id:6,name:"Boston Fabric Dining Chair",price:4049,quantity:1,prdImgURL:"https://media.homecentre.com/i/homecentre/158489652-158489652-HCB650DEC16_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",CatgoryID:2},
//   {id:7,name:"Eterno TV Unit",price:29999,quantity:5,prdImgURL:"https://media.homecentre.com/i/homecentre/159664038-159664038-HCB1423MAR18_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",CatgoryID:3},
//   {id:8,name:"Yukon TV Unit",price:12999,quantity:9,prdImgURL:"https://media.homecentre.com/i/homecentre/161684476-161684476-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",CatgoryID:3},
//   {id:9,name:"Saturn TV Unit",price:8499,quantity:0,prdImgURL:"https://media.homecentre.com/i/homecentre/156234165-156234165-HC090418_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",CatgoryID:3},
// ]
}



@Input() get filterInChild():number{
  return this.FilterPrice;
}
set filterInChild(value:number){
  this.FilterPrice=value;
//  this.filterList = this.performFilter(value);
//day 3
this.filterList=this.productService.performFilter(value);
}
  ngOnInit(): void {
    // this.filterList=this.producstList;//start show all producstList

    //day3 => use service
    // this.filterList=this.productService.getAllProducts()

    // day5 test5
//Solution
    this.prdApiService.getAllProducts().subscribe(data=>{
      this.filterList=data;
    })

    //another solution
// this.prdApiService.getAllProducts().subscribe({
//   next:(data)=>{
// this.filterList=data;
//   },
//  error:()=>{
//   console.log("error");
//  }
// })

this.catService.getAllCategories().subscribe(data =>{
  this.categories = data


});


  }

  private filterid : number = 0;
  // task c day 2
  get filterID():number {
    return this.filterid;

  }
  set filterID(value:number){
    this.filterid = value;

    // this.filteredProductList=  this.performFilter(value);
    this.prdApiService.getProductsByCategoryID(value).subscribe(data =>{
      this.filterList=data
    });
  }
  performFilter(filterBy:number):Iproduct[]{
    return this.productService.getAllProducts().filter(function(product:Iproduct){
      if (product.CatgoryID == filterBy) {
        return product ;
      }
      return 0;

    })

  }
// performFilter(filterBy:number):Iproduct[]{
//   return  this.producstList.filter(function(productFilter:Iproduct){
//     if(productFilter.price==filterBy)
//     return productFilter;
//     else
//     return 0;
//   })
// }



@Output() newProdjctEvent:EventEmitter<Iproduct>=new EventEmitter<Iproduct>();

decreaseQuantityFunc(products:Iproduct): void{
  products.quantity--;
//fire event
this.newProdjctEvent.emit(products);
}

// day 4
prdDetails(prdId:number){
  this.router.navigate(['/prd',prdId]);
}
}
