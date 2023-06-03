import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.scss']
})
export class ProductParentComponent {
  FilterPrice!:number ;
  conuterShow:number=0;
  prds:Iproduct[]=[]
  addCart(addproduct:Iproduct):void{

    let prdoductFind= this.prds.find(function(prd){
      if(prd.id === addproduct.id)
    return true;
    else
    return false;});

if(!prdoductFind)
{
  this. prds.push({...addproduct,quantity:1});
  this.conuterShow++;
}
    else
    prdoductFind.quantity +=1    ;
  }

  removeProduct(product:Iproduct):void {
    this.prds = this.prds.filter(prd => prd.id !== product.id);
    this.conuterShow--;
  }
}



