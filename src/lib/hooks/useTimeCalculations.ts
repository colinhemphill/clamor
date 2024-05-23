import { tempoAtom } from '@/state/tempo';
import { useAtomValue } from 'jotai';
import { useCallback, useMemo } from 'react';

export enum Swing {
  Straight = 'straight',
  Dotted = 'dotted',
  Triplet = 'triplet',
}

export default function useTimeCalculations(beats: number, swing: Swing) {
  const tempo = useAtomValue(tempoAtom);

  const getTime = useCallback(
    (beats: number, swing?: Swing) => {
      let msPerBeat = 60000 / tempo;
      if (swing === Swing.Dotted) {
        msPerBeat = msPerBeat * 1.5;
      } else if (swing === Swing.Triplet) {
        msPerBeat = msPerBeat * 0.667;
      }
      return msPerBeat * beats;
    },
    [tempo],
  );

  const getRate = useCallback(
    (beats: number, swing?: Swing) => {
      const ms = getTime(beats, swing);
      const rate = 1000 / ms;
      return rate;
    },
    [getTime],
  );

  const formattedTime = useMemo(() => {
    const time = getTime(beats, swing);
    const roundedTime = Math.round(time);
    return `${roundedTime} ms`;
  }, [beats, getTime, swing]);

  const formattedRate = useMemo(() => {
    const rate = getRate(beats, swing);
    const roundedRate = Math.round(rate * 1000) / 1000;
    return `${roundedRate} Hz`;
  }, [beats, getRate, swing]);

  return { formattedRate, formattedTime };
}
