import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions'


// const unsubscribe = store.subscribe(() =>{
//     console.log("Store Changed!", store.getState());
// });

// store.dispatch(bugAdded('Bug 2'));
store.dispatch(bugAdded("Bug 1"))

// unsubscribe();

// store.dispatch(bugRemoved(1));
// unsubscribe();

// store.dispatch(bugResolved(2));
console.log(store.getState());