import {createSelector} from 'reselect';

const currentUserSelector = state => state.currentUser;

export const selectUser = createSelector(
    [currentUserSelector],
    currentUser => currentUser.user
);