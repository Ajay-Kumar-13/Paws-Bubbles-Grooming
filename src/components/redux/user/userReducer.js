import {ONLINE_STATUS} from "./userTypes";

const initialState = {
    offline: true
}

function reducer(state=initialState, action) {
    switch(action.type) {
        case ONLINE_STATUS: return {...state, offline: !state.offline}
        default: return state
    }
}

export default reducer;