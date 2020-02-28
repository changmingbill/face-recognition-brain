import {createSelector} from 'reselect';
const dataInputSelector = state => state.dataInput;

export const selectEmailInput = createSelector(
    [dataInputSelector],
    dataInput => dataInput.email
);

export const selectPasswordInput = createSelector(
    [dataInputSelector],
    dataInput => dataInput.password
);

export const selectNameInput = createSelector(
    [dataInputSelector],
    dataInput => dataInput.name
);