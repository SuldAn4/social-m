const intitialState = {};
// this store the detail of user

const setUserProfileDetailReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "userProfileDetail":
      return action.payload;
    default:
      return state;
  }
};

export default setUserProfileDetailReducer;