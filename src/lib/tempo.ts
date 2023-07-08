const precision = 5;

export function getTempoAverage(values: Taps) {
  let ticks = values;
  let n = 0;

  for (let i = ticks.length - 1; i >= 0; i--) {
    n += ticks[i];
    if (ticks.length - i >= precision) break;
  }

  return n / precision;
}
