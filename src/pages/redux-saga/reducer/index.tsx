import { combineReducers } from "redux";
import RegionReduce from "./regionReducer";
import UserReduce from "./userReducer";

const rootReducer = combineReducers({
  regionState: RegionReduce,
  userState: UserReduce,
});

export default rootReducer;
