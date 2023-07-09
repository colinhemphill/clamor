import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const MIN_TEMPO = 1;
export const MAX_TEMPO = 300;

export const tempoAtom = atomWithStorage<number>('tempo', 120);
export const tapsAtom = atom<Taps>([]);

export const tapTempoAtom = atom(null, (get, set) => {
  let tempo = get(tempoAtom);

  const taps = get(tapsAtom);
  const time = Date.now();
  taps.push(time);

  const n = taps.length;
  const x = n - 1;
  const y = taps[n - 1] - taps[0];

  if (taps.length >= 2) {
    tempo = (60000 * x) / y;
    tempo = Math.floor(tempo);
    tempo = Math.min(tempo, MAX_TEMPO);
    tempo = Math.max(tempo, MIN_TEMPO);
  }

  set(tapsAtom, taps);
  set(tempoAtom, tempo);
});
