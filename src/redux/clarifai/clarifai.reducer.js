import clarifaiActionType from './clarifai.type';
import {calculateFaceLocation} from './clarifai.utils';
const INITIAL_STATE = {
    box: [],
    count:0,
    imageUrl:'',
    clarifaiError:undefined,
    updateError:undefined
};

const clarifaiReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case clarifaiActionType.FETCH_CLARIFAI_START:
            return {
                ...state
            }
        case clarifaiActionType.FETCH_CLARIFAI_SUCCESS:
            return {
                ...state,
                box:calculateFaceLocation(action.payload)
            }
        case clarifaiActionType.FETCH_CLARIFAI_FAILED:
            return {
                ...state,
                clarifaiError:action.payload
            }
        case clarifaiActionType.RESET_CLARIFAI:
            return {
                ...INITIAL_STATE,
            }
        case clarifaiActionType.UPDATE_USER_COUNT_FAILED:
            return {
                ...state,
                updateError:action.payload
            }
        case clarifaiActionType.GET_IMAGEURL:
        return {
            ...state,
            imageUrl:action.payload
        }
        default:
            return state;
    }
};

export default clarifaiReducer;

