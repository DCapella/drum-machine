const defaultState = {
  instrument: '',
  rows: [['Q', 'W', 'E'], ['A', 'S', 'D'], ['Z', 'X', 'C']],
  rowIndex: ["row-one", "row-two", "row-three"],
};

const mainReducer = (state=defaultState, action) => {
  switch (action.type) {
    case "PLAY_SOUND":
      const sound = document.getElementById(action.letter);
      if (sound !== null) {
        sound.currentTime = 0;
        sound.play();
        return {...state, instrument: action.instrument};
      }
      return {...state};
    default:
      return {...state};
  }
}

export default mainReducer;
