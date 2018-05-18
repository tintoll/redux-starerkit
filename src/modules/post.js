import { handleActions } from "redux-actions";

import axios from 'axios';

function getPostAPI(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST = 'GET_POST';
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';


// redux-promise-middleware 사용
export const getPost = (postId) => ({
  type : GET_POST,
  payload : getPostAPI(postId)
});
/*
redux-thunk 사용시 
export const getPost = (postId) => dispatch => {

  // 먼저 요청이 시작했다는 것을 알려줍니다.
  dispatch({type:GET_POST_PENDING});
  
  return getPostAPI(postId)
         .then(res => {
           // 요청성공
           dispatch({
             type : GET_POST_SUCCESS,
             payload : res
           })
         }).catch(error => {
           dispatch({
             type : GET_POST_FAILURE,
             payload : error
           })
           // error를 throw하여 이 함수가 실행 된 다음에 다시한번 catch를 할수 있게 합니다.
           throw(error);
         })

}
*/

const initialState = {
  pending : false,
  error : false,
  data : {
    title : '',
    body : ''
  }
}

export default handleActions({
  [GET_POST_PENDING] : (state,action) => {
    return {
      ...state,
      pending : true,
      error : false
    }
  },
  [GET_POST_SUCCESS]: (state, action) => {
    const { title, body } = action.payload.data;
    return {
      ...state,
      pending: false,
      data : {
        title, body
      }
    }
  },
  [GET_POST_FAILURE]: (state, action) => {
    return {
      ...state,
      pending : false,
      error : true
    }
  },
},initialState);