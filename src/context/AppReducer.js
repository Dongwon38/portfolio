function AppReducer(state, action) {
  switch (action.type) {
    case "ABOUT_TOGGLE":
      return {
        ...state,
        aboutToggled: !state.aboutToggled,
      };

    default:
      return state;
  }
}

export default AppReducer;
