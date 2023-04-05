import * as ActionRegion from "../constant/regionConstant";

export const GetRegionRequest = () => ({
  type: ActionRegion.GET_DATA_REQUEST,
});

export const GetRegionSuccess = (payload: any) => ({
  type: ActionRegion.GET_DATA_SUCCESS,
  payload,
});

export const GetRegionFailed = (payload: any) => ({
  type: ActionRegion.GET_DATA_FAILED,
  payload,
});

export const AddRegionRequest = (payload: any) => ({
  type: ActionRegion.ADD_DATA_REQUEST,
  payload,
});

export const AddRegionSuccess = (payload: any) => ({
  type: ActionRegion.ADD_DATA_SUCCESS,
  payload,
});

export const AddRegionFailed = (payload: any) => ({
  type: ActionRegion.ADD_DATA_FAILED,
  payload,
});

export const DelRegionRequest = (payload: any) => ({
  type: ActionRegion.DEL_DATA_REQUEST,
  payload,
});

export const DelRegionSuccess = (payload: any) => ({
  type: ActionRegion.DEL_DATA_SUCCESS,
  payload,
});

export const DelRegionFailed = (payload: any) => ({
  type: ActionRegion.DEL_DATA_FAILED,
  payload,
});
///

export const EditRegionRequest = (payload: any) => ({
  type: ActionRegion.EDIT_DATA_REQUEST,
  payload,
});

export const EditRegionSuccess = (payload: any) => ({
  type: ActionRegion.EDIT_DATA_SUCCESS,
  payload,
});

export const EditRegionFailed = (payload: any) => ({
  type: ActionRegion.EDIT_DATA_FAILED,
  payload,
});

///


export const FindRegionRequest = (payload: any) => ({
  type: ActionRegion.FIND_DATA_REQUEST,
  payload,
});

export const FindRegionSuccess = (payload: any) => ({
  type: ActionRegion.FIND_DATA_SUCCESS,
  payload,
});

export const FindRegionFailed = (payload: any) => ({
  type: ActionRegion.FIND_DATA_FAILED,
  payload,
});
