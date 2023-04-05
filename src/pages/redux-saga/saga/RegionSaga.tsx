import {call, put} from 'redux-saga/effects'
import Region from '@/pages/api/Region'
import {
  GetRegionSuccess,
  GetRegionFailed,
  AddRegionSuccess,
  AddRegionFailed,
  DelRegionSuccess,
  DelRegionFailed,
  FindRegionFailed,
  FindRegionSuccess,
  EditRegionFailed,
  EditRegionSuccess
} from "../action/regionAction";
function* handleGetRegion(): any{
    try {
        const result = yield call(Region.GetData)
        yield put(GetRegionSuccess(result))
    } catch (error) {
            yield put(GetRegionFailed(error));
    }
}

function* handleAddRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.upload, payload);
    yield put(AddRegionSuccess(result.data));
  } catch (error) {
    yield put(AddRegionFailed(error));
  }
}

function* handleDelRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.deleted, payload);
    yield put(DelRegionSuccess(result.data));
  } catch (error) {
    yield put(DelRegionFailed(error));
  }
}

function* handleFindRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.findData, payload);
    yield put(FindRegionSuccess(result.data));
  } catch (error) {
    yield put(FindRegionFailed(error));
  }
}

function* handleEditRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.updatePhoto, payload);
    yield put(EditRegionSuccess(result.data));
  } catch (error) {
    yield put(EditRegionFailed(error));
  }
}
export { handleGetRegion, handleAddRegion, handleDelRegion, handleFindRegion, handleEditRegion };