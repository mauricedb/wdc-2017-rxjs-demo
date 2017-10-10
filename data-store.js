const Rx = require("rxjs");
const reducer = require("./reducer");

const initialState = {
  count: 0,
  firstName: "Maurice"
};

const action$ = new Rx.Subject();
const store$ = action$
  .startWith({ type: "__INIT__" })
  .scan(reducer, initialState)
  .shareReplay(1);

const dispatch = action => action$.next(action);


store$.subscribe(state => console.log("State:", state));

setTimeout(() => dispatch({ type: "INCREMENT" }), 2000);
setTimeout(() => dispatch({ type: "INCREMENT" }), 4000);
setTimeout(() => dispatch({ type: "INCREMENT" }), 6000);

dispatch({ type: "RENAME", payload: "Kai" });
