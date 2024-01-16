const initialState = {
  rootColor: "#000",
  rootBgColor: "#3d3d3d",
  rootBodyColor: "#fff",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ROOT_COLOR":
      return {
        ...state,
        rootColor: action.payload,
        rootBgColor: action.payload,
        rootBodyColor: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
