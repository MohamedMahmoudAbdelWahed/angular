import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {
    let str1 = value.slice(0,4);
    let str2 = value.slice(4,8);
    let str3 = value.slice(8,12);
    return `${str1}-${str2}-${str3}`;
  }

  }


