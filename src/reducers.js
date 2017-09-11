import {combineReducers} from 'redux';
import {USER} from './actions';

/* Migraine Form */
function migraineAtom(state = {}, action){
  if(action.type in USER.MIGRAINE && action.type !== USER.MIGRAINE.SET_ARRAY){
    // forgot how to get this to work w/o initial state
    return Object.assign({}, state, { [action.key]: action.value});
  } else {
    return state;
  }
}

function migraineTextArray(state = {}, action){
  if(action.type === USER.MIGRAINE.SET_ARRAY){
    let stateArr = state[action.key] || [];
    
    return Object.assign({}, state, {[action.key]: setTextArray(stateArr, action)});
  } else {
    return state;
  }
}

function setTextArray(state, action){
  return [...state, action.value];
}


const migraineForm = combineReducers({
    migraineAtom,
    migraineTextArray
});


export const migraineApp = combineReducers({
    migraineForm
});
