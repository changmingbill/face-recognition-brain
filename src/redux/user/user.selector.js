import {createSelector} from 'reselect';

const currentUserSelector = state => state.currentUser;

export const selectUser = createSelector(
    [currentUserSelector],
    currentUser => currentUser.user
);

export const selectIsSignIn = createSelector(
    [currentUserSelector],
    isSignIn => isSignIn.isSignIn
);

export const selectRoute = createSelector(
    [currentUserSelector],
    route => route.route
);