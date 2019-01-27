import { UIActionTypes } from 'actions/types';

export const showAnonymous = (payload) => (
    {
        type: UIActionTypes.SHOW_ANONYMOUSLY,
        payload
    });
export const showSignIn = (payload) => (
    {
        type: UIActionTypes.SHOW_SIGN_IN,
        payload
    });
export const openProfile = (payload) => (
    {
        type: UIActionTypes.OPEN_PROFILE,
        payload
    });
export const closeProfile = (payload) => (
    {
        type: UIActionTypes.CLOSE_PROFILE,
        payload
    });