import {createSelector} from 'reselect';

const selectorUser = state => state.currentUser;

export const loadSelectorUser = createSelector(
    [selectorUser],
    currentUser => currentUser.user //currentUser means userReducer, user means object which in userReducer
);