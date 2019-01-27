import { combineReducers } from 'redux';
import { UIActionTypes } from 'actions/types';


const initialState = {
    viewStatus: true,
    isLoggedIn: false,
    profileOpen: false,
    error: null
};

const viewStatus = (state = initialState.viewStatus, action) => {
    switch (action.type) {

        case UIActionTypes.SHOW_ANONYMOUSLY:
            return true;

        case UIActionTypes.SHOW_SIGN_IN:
            return false;

        default:
            return state;
    }
}

const isLoggedIn = (state = initialState.isLoggedIn, action) => {
    switch (action.type) {

        default:
            return state;
    }
}
const profileOpen = (state = initialState.profileOpen, action) => {
    switch (action.type) {
        case UIActionTypes.OPEN_PROFILE:
            if (state) {
                return false;
            } else {
                return true;
            }
        case UIActionTypes.CLOSE_PROFILE:
            return false;

        default:
            return state;
    }
}

export default combineReducers({ viewStatus, isLoggedIn, profileOpen });