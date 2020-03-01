import {createSelector} from 'reselect';

const clarifaiSelector = state => state.clarifai;

export const selectClarifaiBox = createSelector(
    [clarifaiSelector],
    clarifaiSelector => clarifaiSelector.box
);

export const selectClarifaiCount = createSelector(
    [clarifaiSelector],
    clarifaiSelector => clarifaiSelector.count
);

export const selectClarifaiImageUrl = createSelector(
    [clarifaiSelector],
    clarifaiSelector => clarifaiSelector.imageUrl
);