# redux-starter-kit

**redux-saga** 는 비동기작업처럼, 리듀서에서 처리하면 안되는 순수하지 않은 작업들을 하기 위한 리덕스 미들웨어입니다.

**redux-thunk** 의 경우 함수를 dispatch 해주었고, **reduix-promise-middleware** 나 **redux-pender** 에선 Promise 가 들어있는 액션을 dispatch 해주었다면, **redux-saga** 에서는 일반 액션을 dispatch 하게 됩니다.