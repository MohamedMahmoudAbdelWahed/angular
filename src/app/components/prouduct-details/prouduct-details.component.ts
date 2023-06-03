import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-prouduct-details',
  templateUrl: './prouduct-details.component.html',
  styleUrls: ['./prouduct-details.component.scss'],
})
//OnInit =>get id of my product
export class ProuductDetailsComponent implements OnInit {
  prdID: number = 0;
  product: Iproduct | undefined = undefined; //undefined => case rutern or not rutern id
  //prouduct ids
  prodectIdArray: Number[] = [];
  returnIndex: number = 0;
  //ActivatedRoute => Its importance contains snapshot
  // snapshot => contains paramMap
  //paramMap => contains all parameters located in URL
  constructor(
    private prdService: ProductsServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
private prodApService: ProductsApiService
  ) {}
  ngOnInit(): void {
    //day 4 task3
    //if return sring or null (not return)
    //convert string to number => parseInt(),Number(),+,property as number
    // rutern 0 if case null
    // 'productID' located in app-routing.module.ts(path:'prd/:productID',)

    //snapshot =>Do not allow work Navigator in same component (read one time)
    //   this.prdID=(this.activatedRoute.snapshot.paramMap.get('productID'))?Number(this.activatedRoute.snapshot.paramMap.get('productID')):0;

    //  this.product= this.prdService.getProductByID(this.prdID);

    this.prodectIdArray = this.prdService.getIdOfProducts();
    //subscribe => allow work Navigator in same component (As soon as you go to the one before or the next, you will see the change along)
    //(read change)
    //return object and You need to know the change in it,put it inside
    this.activatedRoute.paramMap.subscribe((params) => {
      this.prdID = params.get('productID')
        ? Number(params.get('productID'))
        : 0;

      // let resIsFoundPrd = this.prdService.getProductByID(this.prdID);
      // if (resIsFoundPrd) {
      //   this.product = resIsFoundPrd;
      // } else {
      //   alert('Product not found');
      // }

//day5 task5
this.prodApService.getProductByID(this.prdID).subscribe(data=>{
  this.product=data;
  // console.log(this.product);
})

    });
  }
  GoBack() {
    this.router.navigate(['products']);
  }

  prevFunc() {
    this.returnIndex = this.prodectIdArray.indexOf(this.prdID);

    this.router.navigate(["/prd", this.prodectIdArray[--this.returnIndex]])
  }
  nextFunc() {
    this.returnIndex = this.prodectIdArray.indexOf( this.prdID );

    this.router.navigate(["/prd", this.prodectIdArray[++this.returnIndex]])
  }

}
