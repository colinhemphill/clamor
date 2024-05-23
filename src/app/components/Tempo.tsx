'use client';

import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Slider } from '@/app/components/ui/slider';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/app/components/ui/tooltip';
import { useToast } from '@/app/components/ui/use-toast';
import {
  MAX_TEMPO,
  MIN_TEMPO,
  tapTempoAtom,
  tapsAtom,
  tempoAtom,
} from '@/state/tempo';
import { useAtom, useSetAtom } from 'jotai';
import { Pointer, RotateCcw } from 'lucide-react';
import { useCallback, useEffect } from 'react';
import HelpIcon from './HelpIcon';

let timeout: NodeJS.Timeout;

export default function Tempo() {
  const { toast } = useToast();
  const setTapTempo = useSetAtom(tapTempoAtom);
  const [tempo, setTempo] = useAtom(tempoAtom);
  const [taps, setTaps] = useAtom(tapsAtom);

  const resetTaps = useCallback(() => {
    setTaps([]);
    toast({
      description: 'Tap average was reset.',
    });
  }, [setTaps, toast]);

  const tap = useCallback(() => {
    clearTimeout(timeout);
    setTapTempo();

    timeout = setTimeout(() => {
      resetTaps();
    }, 5000);
  }, [resetTaps, setTapTempo]);

  const spaceHandler = useCallback(
    ({ code }: KeyboardEvent) => {
      if (code === 'Space') {
        tap();
      }
    },
    [tap],
  );

  useEffect(() => {
    window.addEventListener('keydown', spaceHandler);

    return () => {
      window.removeEventListener('keydown', spaceHandler);
    };
  }, [spaceHandler]);

  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row">
      <Card className="flex-auto">
        <CardHeader>
          <CardTitle>Set Tempo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Label htmlFor="bpm" id="bpm-label">
              BPM
            </Label>
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
            aria-labelledby="bpm-label"
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
          <CardDescription className="flex items-center gap-2">
            <HelpIcon>
              <div>
                Keeps a running list of taps that are averaged over time.
              </div>
              <div>
                Average resets automatically after 5 seconds of inactivity.
              </div>
            </HelpIcon>
            <div>
              <span className="font-bold">Timing taps: </span>
              <span className="tabular-nums">{taps.length}</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
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
            <Pointer className="mr-1" name="Pointing hand icon" size="1em" />
            TAP
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => {
                  resetTaps();
                  clearTimeout(timeout);
                }}
                variant="secondary"
              >
                <RotateCcw
                  className="mr-1"
                  name="Counter clockwise rotation icon"
                  size="1em"
                />
                Reset taps
              </Button>
            </TooltipTrigger>
            <TooltipContent>Manually reset the taps average.</TooltipContent>
          </Tooltip>
        </CardContent>
      </Card>
    </div>
  );
}
