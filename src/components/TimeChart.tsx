import { tempoAtom } from '@/state/tempo';
import { useAtomValue } from 'jotai';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function TimeChart() {
  const tempo = useAtomValue(tempoAtom);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculated Times for {tempo} BPM</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Test</p>
      </CardContent>
    </Card>
  );
}
