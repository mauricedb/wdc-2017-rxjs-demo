const Rx = require("rxjs");

const data = [1, 2, 3];
// data.forEach(i => console.log(i))

// Rx.Observable.from(data)
//     .subscribe(i => console.log(i));

// Rx.Observable.interval(1000)
// .subscribe(i => console.log(i));

// new Rx.Observable(observer => {

//     // observer.next(2);
//     // observer.next(42);
//     // observer.complete();
//     // observer.next(100);

//     var count =0;
//     setInterval(() => observer.next(count++), 1000)

// })

Rx.Observable
  .interval(1000)
  .take(10)
  .filter(x => x % 2 === 0)
  //   .do(console.log)
  //   .subscribe();
    .map(x => x*x)
  .subscribe(
    i => console.log(i),
    err => console.log(err),
    () => console.log("All done")
  );


  Rx.Observable