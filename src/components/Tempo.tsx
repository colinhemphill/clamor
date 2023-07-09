import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/components/ui/use-toast';
import {
  MAX_TEMPO,
  MIN_TEMPO,
  tapTempoAtom,
  tapsAtom,
  tempoAtom,
} from '@/state/tempo';
import { useAtom, useSetAtom } from 'jotai';
import { Pointer } from 'lucide-react';
import { useEffect } from 'react';

let timeout: NodeJS.Timeout;

export default function Tempo() {
  const { toast } = useToast();
  const setTapTempo = useSetAtom(tapTempoAtom);
  const [tempo, setTempo] = useAtom(tempoAtom);
  const [taps, setTaps] = useAtom(tapsAtom);

  const resetTaps = () => {
    setTaps([]);
  };

  const tap = () => {
    clearTimeout(timeout);
    setTapTempo();

    timeout = setTimeout(() => {
      toast({
        description: 'Tap average was reset automatically',
      });
      resetTaps();
    }, 5000);
  };

  const spaceHandler = ({ code }: KeyboardEvent) => {
    if (code === 'Space') {
      tap();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', spaceHandler);

    return () => {
      window.removeEventListener('keydown', spaceHandler);
    };
  }, []);

  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row">
      <Card className="flex-auto">
        <CardHeader>
          <CardTitle>Set Tempo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Label htmlFor="bpm">BPM</Label>
            <Input
              id="bpm"
              min={MIN_TEMPO}
              max={MAX_TEMPO}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (isNaN(val) || val < MIN_TEMPO || val > MAX_TEMPO) {
                  setTempo(120);
                } else {
                  setTempo(val);
                }
              }}
              placeholder="Tempo in BPM"
              type="number"
              value={tempo}
            />
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
      <Card>
        <CardHeader>
          <CardTitle>Tap Tempo</CardTitle>
          <CardDescription>Tap average resets after 5 seconds.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="font-bold tabular-nums">Timing taps: </div>
            <div>{taps.length}</div>
          </div>
          <Button
            className="w-full"
            onClick={tap}
            onKeyDown={(e) => {
              if (e.code === 'Space') {
                e.preventDefault();
              }
            }}
            size="xl"
            variant="theme"
          >
            <Pointer className="mr-1" size="1em" />
            TAP
          </Button>
          <Button
            onClick={() => {
              resetTaps();
              clearTimeout(timeout);
            }}
            variant="secondary"
          >
            Reset taps
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
