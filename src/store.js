import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import loggerMiddleware from './lib/loggerMiddleware';

// 로거 오픈소스 미들웨서 사용해보기 
import { createLogger } from "redux-logger";
const logger = createLogger();


// 미들웨어가 여러개인 경우에는 파라미터로 여러개를 전달해주면됩니다. applyMiddleware(a,b,c)
const store = createStore(modules, applyMiddleware(logger));

export default store;