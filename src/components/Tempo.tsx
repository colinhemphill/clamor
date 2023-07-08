import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { MAX_TEMPO, MIN_TEMPO, tapTempoAtom, tempoAtom } from '@/state/tempo';
import { useAtom, useSetAtom } from 'jotai';
import { Pointer } from 'lucide-react';

export default function Tempo() {
  const [tempo, setTempo] = useAtom(tempoAtom);
  const setTapTempo = useSetAtom(tapTempoAtom);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Set Tempo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Label htmlFor="bpm">BPM</Label>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              className="appearance-none"
              id="bpm"
              min={MIN_TEMPO}
              max={MAX_TEMPO}
              onChange={(e) => setTempo(parseInt(e.target.value))}
              placeholder="Tempo in BPM"
              type="number"
              value={tempo}
            />
            <Button onClick={setTapTempo} variant="theme">
              <Pointer className="mr-1" size="1em" />
              TAP
            </Button>
          </div>
        </div>

        <Slider
          className="mt-8"
          max={MAX_TEMPO}
          min={MIN_TEMPO}
          onValueChange={([newTempo]) => setTempo(newTempo)}
          value={[tempo]}
        />
      </CardContent>
    </Card>
  );
}
