import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import loggerMiddleware from './lib/loggerMiddleware';

// 로거 오픈소스 미들웨서 사용해보기 
import { createLogger } from "redux-logger";
const logger = createLogger();

// redux-thunk 사용
import ReduxThunk from 'redux-thunk';


// redux-promise-middleware
import promiseMiddleware from 'redux-promise-middleware';
// 프로미스가 payload 로 전달되면, 요청이 시작, 성공, 실패 할 때 액션의 뒷부분에 _PENDING, _FULFILLED, _REJECTED 를 반환
// 아래와같이 내가 원하는 접미사를 붙일수있다.
const customizePromiseMiddleware = promiseMiddleware({
  promiseTypeSuffixes : ['PENDING', 'SUCCESS', 'FAILURE']
});

// 미들웨어가 여러개인 경우에는 파라미터로 여러개를 전달해주면됩니다. applyMiddleware(a,b,c)
const store = createStore(modules, applyMiddleware(logger, ReduxThunk, customizePromiseMiddleware));

export default store;