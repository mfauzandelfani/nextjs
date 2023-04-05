import * as ActionType from "../constant/regionConstant";

const init_state = {
  regions: [],
  reg: [],
};

const RegionReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_DATA_REQUEST:
      return { ...state };
    case ActionType.GET_DATA_SUCCESS:
      return GetRegion(state, action);
    case ActionType.ADD_DATA_REQUEST:
      return { ...state };
    case ActionType.ADD_DATA_SUCCESS:
      return AddRegion(state, action);
    case ActionType.DEL_DATA_REQUEST:
      return { ...state };
    case ActionType.DEL_DATA_SUCCESS:
      return DelRegion(state, action);
    case ActionType.FIND_DATA_REQUEST:
      return { ...state };
    case ActionType.FIND_DATA_SUCCESS:
      return FindRegion(state, action);

    case ActionType.EDIT_DATA_REQUEST:
      return { ...state };
    case ActionType.EDIT_DATA_SUCCESS:
      return EditRegion(state, action);
    default:
      return { ...state };
  }
};

const GetRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const AddRegion = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    regions: [...state.regions, payload],
  };
};

const DelRegion = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    reg: payload,
  };
};

const FindRegion = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    reg: payload,
  };
};

const EditRegion = (state: any, action: any) => {
  return {
    ...state,
  };
};
export default RegionReduce;
