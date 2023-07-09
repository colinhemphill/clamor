import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const MIN_TEMPO = 1;
export const MAX_TEMPO = 300;

export const tempoAtom = atomWithStorage<number>('tempo', 120);
export const tapsAtom = atom<Taps>([]);

export const tapTempoAtom = atom(null, (get, set) => {
  const time = Date.now();
  const taps = [...get(tapsAtom), time];

  const n = taps.length;
  const x = n - 1;
  const y = taps[n - 1] - taps[0];

  let tempo = get(tempoAtom);

  if (taps.length > 1) {
    tempo = (60000 * x) / y;
    tempo = Math.round(tempo);
    tempo = Math.min(tempo, MAX_TEMPO);
    tempo = Math.max(tempo, MIN_TEMPO);
  }

  set(tapsAtom, taps);
  set(tempoAtom, tempo);
});
