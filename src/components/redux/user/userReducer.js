import { CURRENT_NOTIFICATION } from "./userTypes";
import {ONLINE_STATUS} from "./userTypes";


const initialState = {
    offline: true,
    currentNotification: ''
}

function reducer(state=initialState, action) {
    switch(action.type) {
        case ONLINE_STATUS: return {...state, offline: !state.offline}
        case CURRENT_NOTIFICATION: return {...state, currentNotification: action.payload}
        default: return state
    }
}

export default reducer;