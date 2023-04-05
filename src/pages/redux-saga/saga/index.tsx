import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeRegion from "../constant/regionConstant";
import * as ActionTypeUser from '../constant/userConstant'
import {
  handleAddRegion,
  handleGetRegion,
  handleDelRegion,
  handleFindRegion,
  handleEditRegion,
} from "./RegionSaga";

import {
  handleSignin,
  handleSignup,
  handleSignout,

} from "./UserSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeRegion.GET_DATA_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.ADD_DATA_REQUEST, handleAddRegion),
    takeEvery(ActionTypeRegion.DEL_DATA_REQUEST, handleDelRegion),
    takeEvery(ActionTypeRegion.FIND_DATA_REQUEST, handleFindRegion),
    takeEvery(ActionTypeRegion.EDIT_DATA_REQUEST, handleEditRegion),

    takeEvery(ActionTypeUser.USER_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.USER_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.USER_SIGNOUT_REQUEST, handleSignout),
  ]);
}

export default watchAll;
