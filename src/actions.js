import {goBack, navigateTo} from 'framework7-redux';
/* Actions */
/*export const SESSION = {
    NAV_TO_PAGE: 'NAV_TO_PAGE',
    ADD_PAGE_TO_HISTORY: 'ADD_PAGE_TO_HISTORY',
    NAV_BACK: 'NAV_BACK',
    NAV_FORWARD: 'NAV_FORWARD'
};*/

export const USER = {
    /* migraine history */
    HISTORY: {
        SUBMIT_MIGRAINE: 'SUBMIT_MIGRAINE',
        GET_MIGRAINES: 'GET_MIGRAINES'
    },
    MIGRAINE: {
        SET_TEXT: 'SET_TEXT',
        SET_TEXT_ARRAY: 'SET_TEXT_ARRAY',
        SET_BOOL: 'SET_BOOL',
        SET_NUM: 'SET_NUM',
        SET_DATE: 'SET_DATE',
        
        // redone
        SET_ATOM: 'SET_ATOM',
        SET_ARRAY: 'SET_ARRAY',
        SET_SUBMIT: 'SET_SUBMIT'
    }
};


/* String -> Object */
//export function navTo(page){
//    return { type: SESSION.NAV_TO_PAGE, page };
//}

/* String, Object -> Object */
//export function addPageToHistory(page, state){
//    return { type: SESSION.ADD_TO_PAGE_HISTORY, page, state };
//}

/* String, Object(???) -> Object 
    assumes string is 'NAV_BACK' or 'NAV_FORWARD' */
//export function navWithHistory(direction, prevState){
//    return { type: SESSION[direction], state: prevState };
//}


/* Object -> Object */
export function submitMigraine(migraine){
    return { type: USER.HISTORY.SUBMIT_MIGRAINE, migraine };
}

/* ... -> Object */
export function getMigraines(x){
    return { type: USER.HISTORY.GET_MIGRAINES }; // what else?
}

/* String, Object -> Object 
    for SET_STR/NUM/BOOL/ARR 
    inputs = { key: String, value: String|Number|Boolean|Array-of-String */
export function setMigraineInput(action, inputs){
  return Object.assign({}, { type: action }, inputs)
}

export function setCurrentDate(date){
    return { type: USER.MIGRAINE.SET_DATE, date };
}


/* Object -> Object 
inputs = { key: String, value: Str|Num|Bool } */
export function setInputAtom(inputs){
    return Object.assign({}, {type: USER.MIGRAINE.SET_ATOM}, inputs);
}

/* Object -> Object
inputs = { key: String, value: [...X] } */
export function setInputArray(inputs){
    let joined = inputs.value.join('');
    let adjusted = Object.assign({}, { key: inputs.key, value: joined });
    
    return Object.assign({}, {type: USER.MIGRAINE.SET_ARRAY}, adjusted);
}

/* Navigation */
export function navToPage(link){
    return navigateTo(link);
}

export function navBack(){
    return goBack();
}
