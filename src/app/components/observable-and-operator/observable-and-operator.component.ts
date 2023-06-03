import { formatCurrency } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  from,
  fromEvent,
  map,
  merge,
  of,
  take,
} from 'rxjs';

@Component({
  selector: 'app-observable-and-operator',
  templateUrl: './observable-and-operator.component.html',
  styleUrls: ['./observable-and-operator.component.scss'],
})
//oninit =>implement start component
//onching =>Something to receive from me input decorator
//OnDestroy=>if came out from component implement Destroy component With everything inside him
export class ObservableAndOperatorComponent implements OnInit, OnDestroy {
  // day 5 tesk6
  //subscription =>stop subscribe  if case came out from component
  //! => rutern not null
  sub!: Subscription;
  //return object
  obs = new Observable((observer) => {
    console.log('observable starts');
    setTimeout(() => {
      observer.next('1');
    }, 1000);

    setTimeout(() => {
      observer.next('2');
    }, 2000);

    setTimeout(() => {
      observer.next('3');
    }, 3000); //dtop case error bacouse show case complete
    // setTimeout(()=>{
    //   observer.error('Error Happened');
    // },4000);
    setTimeout(() => {
      observer.next('5');
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 6000);
  });
  ngOnInit(): void {
    this.sub = this.obs.subscribe({
      //three callback functions
      //next , error , complete
      next: (val) => {
        console.log(val);
      },
      error: (err) => {
        console.log(err);
      }, //complete=> not using if fine error
      complete: () => {
        console.log('observer Complete');
      },
    });

    // //next=> success (instead of previous)
    //   this.obs.subscribe(data=>{
    //     console.log(data);
    //   })

    //operators
    let obs1 = new Observable((observer: any) => {
      observer.next('this is the first observer');
    });
    let obs2 = new Observable((observer: any) => {
      observer.next('this is the second observer');
    });

    // obs1.subscribe(data=>{console.log(data)});
    //merge=>merge two or more operators return one new operator

    // let obs3=merge(obs1,obs2);
    // obs3.subscribe(data=>{console.log(data)});

    //of =>any type data
    //creation operator=>create observable

    // of(1,2,3).subscribe(data=>{console.log(data);});

    //from
    //creation operator=>create observable
    //way pass different than of

    // from([1,2,3]).subscribe(data=>{console.log(data);});

    //map
    // let obs =of("hello world");

    // //pipe =>pass more than one operator
    // obs.pipe(map(data=>data.toUpperCase())).subscribe(data=>{console.log(data)});

    //fromEvent() operator =>do event doesn't important he number repeated
    // let obs4 = fromEvent(document, "click");
    // obs4.subscribe(()=>{console.log("you clicked this page")});

    //take =>How often is even it repeated

    // let obs4 = fromEvent(document, 'click');
    // obs4.pipe(take(5)).subscribe(() => {
    //   console.log('you clicked this page');
    // }); //5=>number repeated
  }
  //ngOnDestroy=>The last thing you do
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log('observable stopped');
  }
}
