const loggerMiddleware = store => next => action => {
  /* 미들웨어 내용 */
  // 현재 스토어 상태값 기록
  console.log('현재 상태', store.getState());
  // 액션 기록
  console.log('액션', action);

  // 액션을 다음 미들웨어, 혹은 리듀서로 넘김
  const result = next(action);

  // 액션 처리후 스토어 상태 기록 
  console.log('다음상태', store.getState());
  console.log('\n');
  return result; // 여기서 반환하는 값은 store.dispatch(ACTION_TYPE)했을때의 결과로 설정됩니다.
};

export default loggerMiddleware;
/*
ES5
function es5LoggerMiddleware(store) {
  return function(next){
    return function(action){

    }
  }
}
*/