import { combineReducers } from 'redux';
import wikipedia from './wikipedia';

let reduce = combineReducers({
    wikipedia: wikipedia 
})

/*
function reduce(state, action) {
    if (state === undefined) {
        return {
            counter: counter(undefined, action),
            todos: todos(undefined, action)
        }
    } else {
        return {
            counter: counter(state.counter, action),
            todos: todos(state.todos, action)
        }
    }
}
*/

export default reduce;

