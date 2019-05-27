import categoryReducer from './category-reducer';
import expenseReducer from './expense-reducer';
import {combineReducers} from 'redux';


export default combineReducers({
  categoryReducer,
  expenseReducer
});