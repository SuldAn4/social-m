import constant from "../../../../constant/videoPage";
const initialState = constant.homePageVideos.sort(() => Math.random() - 0.5);

const videoPageDataReducer = (state = initialState, action) => {
  if (action.type === "setVideoPageData") {
    return action.payload;
  }
  return state;
};

export default videoPageDataReducer;
