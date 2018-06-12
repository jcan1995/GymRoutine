import { combineReducers } from 'redux';
import DailyRoutinesReducer from './DailyRoutinesReducer'
import DailyRoutineSelectionReducer from './DailyRoutineSelectionReducer'

export default combineReducers({
  routines: DailyRoutinesReducer
});
