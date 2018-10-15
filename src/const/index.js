import soundQ from "../components/misc/snare/q.wav";
import soundW from "../components/misc/snare/w.wav";
import soundE from "../components/misc/snare/e.wav";
import soundA from "../components/misc/snare/a.wav";
import soundS from "../components/misc/snare/s.wav";
import soundD from "../components/misc/snare/d.wav";
import soundZ from "../components/misc/snare/z.wav";
import soundX from "../components/misc/snare/x.wav";
import soundC from "../components/misc/snare/c.wav";


export const letterToInstrument = {
  'Q': 'Snare 1', 'W': 'Snare 2', 'E': 'Snare 3', 'A': 'Hi Hat 1',
  'S': 'Hi Hat 2', 'D': 'Hi Hat 3', 'Z': 'Cymbals 1', 'X': 'Cymbals 2',
  'C': 'Cymbals 3',
}

export const keyCodeToLetter = {
  81: 'Q', 87: 'W', 69: 'E', 65: 'A', 83: 'S',
  68: 'D', 90: 'Z', 88: 'X', 67: 'C',
}

export const letterToSound = {
  'Q': soundQ, 'W': soundW, 'E': soundE, 'A': soundA, 'S': soundS,
  'D': soundD, 'Z': soundZ, 'X': soundX, 'C': soundC,
}
