import clarifaiActionType from './clarifai.type';
import {updateUserCount} from '../user/user.action';

export const fetchClarifaiStart = () => ({
    type: clarifaiActionType.FETCH_CLARIFAI_START
});

export const fetchClarifaiSuccess = (data) => ({
    type: clarifaiActionType.FETCH_CLARIFAI_SUCCESS,
    payload:data
});

export const fetchClarifaiFailure = (error) => ({
    type: clarifaiActionType.FETCH_CLARIFAI_FAILED,
    payload:error
});

export const resetClarifai = () => ({
  type: clarifaiActionType.RESET_CLARIFAI,
  
});


export const updateUserCountFailure = (err) => ({
    type:clarifaiActionType.UPDATE_USER_COUNT_FAILED,
    payload:err
});

export const getImageUrl = (imageUrl) => ({
  type:clarifaiActionType.GET_IMAGEURL,
  payload:imageUrl
})

export const fetchClarifaiStartAsync = (input,userId) => (dispatch) => {
    dispatch(fetchClarifaiStart());
    dispatch(getImageUrl(input));
    fetch('https://dry-anchorage-94607.herokuapp.com/imageurl',{
        method: 'post',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: input
        })
          
    })
    .then(response => response.json())
    .then(response => {
      if (response){
        fetch('https://dry-anchorage-94607.herokuapp.com/image',{
        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: userId
        })
        })
        .then(res=> res.json())
        .then(count => 
          dispatch(updateUserCount(count))
        )
        .catch((err)=>dispatch(updateUserCountFailure(err)))
      }
   
        dispatch(fetchClarifaiSuccess(response));
      
    })
    .catch(error => dispatch(fetchClarifaiFailure(error)))
};