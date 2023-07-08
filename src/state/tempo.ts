import { getTempoAverage } from '@/lib/tempo';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const MIN_TEMPO = 1;
export const MAX_TEMPO = 300;

export const tempoAtom = atomWithStorage<number>('tempo', 120);

const tapsAtom = atom<Taps>([]);

export const tapTempoAtom = atom(null, (get, set, update) => {
  let tempo = get(tempoAtom);
  const taps = [...get(tapsAtom), Date.now()];
  let ticks: Array<number> = [];

  if (taps.length >= 2) {
    for (let i = 0; i < taps.length; i++) {
      if (i >= 1) {
        ticks.push(
          Math.round((60 / (taps[i] / 1000 - taps[i - 1] / 1000)) * 100) / 100,
        );
      }
    }
  }

  if (taps.length >= 24) {
    taps.shift();
  }

  set(tapsAtom, taps);

  if (ticks.length >= 2) {
    tempo = getTempoAverage(ticks);
    tempo = Math.floor(tempo);
    tempo = Math.min(tempo, MAX_TEMPO);
    tempo = Math.max(tempo, MIN_TEMPO);
  }

  set(tempoAtom, tempo);
});
