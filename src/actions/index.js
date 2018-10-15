import { letterToInstrument, keyCodeToLetter } from "../const/index.js";


export function middleMan(e) {
  let letter = e.target.value;
  return {
    type: "PLAY_SOUND",
    letter: letter,
    instrument: letterToInstrument[letter],
  }
}

export function keySound(e) {
  let letter = keyCodeToLetter[e.keyCode];
  return {
    type: "PLAY_SOUND",
    letter: letter,
    instrument: letterToInstrument[letter],
  }
}
