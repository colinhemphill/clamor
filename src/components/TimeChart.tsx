import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { tempoAtom } from '@/state/tempo';
import { useAtomValue } from 'jotai';
import { useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

enum Swing {
  Straight = 'straight',
  Dotted = 'dotted',
  Triplet = 'triplet',
}

interface Timing {
  beats: number;
  name: string;
}

const timings: Array<Timing> = [
  {
    name: 'Whole',
    beats: 4,
  },
  {
    name: '1/2',
    beats: 2,
  },
  {
    name: '1/4',
    beats: 1,
  },
  {
    name: '1/8',
    beats: 1 / 2,
  },
  {
    name: '1/16',
    beats: 1 / 4,
  },
];

export default function TimeChart() {
  const tempo = useAtomValue(tempoAtom);

  const getTime = useCallback(
    (beats: number, swing?: Swing) => {
      let msPerBeat = 60000 / tempo;
      if (swing === Swing.Dotted) {
        msPerBeat = msPerBeat * 1.5;
      } else if (swing === Swing.Triplet) {
        msPerBeat = msPerBeat * 0.667;
      }
      return Math.round(msPerBeat * beats);
    },
    [tempo],
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculated Times for {tempo} BPM</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={Swing.Straight}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value={Swing.Straight}>Straight</TabsTrigger>
            <TabsTrigger value={Swing.Dotted}>Dotted</TabsTrigger>
            <TabsTrigger value={Swing.Triplet}>Triplet</TabsTrigger>
          </TabsList>

          {/* Straight beats */}
          <TabsContent value={Swing.Straight}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Beats</TableHead>
                  <TableHead>Time in MS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timings.map((timing) => (
                  <TableRow key={timing.name}>
                    <TableCell>{timing.name}</TableCell>
                    <TableCell>{getTime(timing.beats)} ms</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          {/* Dotted beats */}
          <TabsContent value={Swing.Dotted}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Beats</TableHead>
                  <TableHead>Time in MS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timings.map((timing) => (
                  <TableRow key={`${timing.name}-${Swing.Dotted}`}>
                    <TableCell>{timing.name}</TableCell>
                    <TableCell>
                      {getTime(timing.beats, Swing.Dotted)} ms
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          {/* Triplet beats */}
          <TabsContent value={Swing.Triplet}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Beats</TableHead>
                  <TableHead>Time in MS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timings.map((timing) => (
                  <TableRow key={`${timing.name}-${Swing.Triplet}`}>
                    <TableCell>{timing.name}</TableCell>
                    <TableCell>
                      {getTime(timing.beats, Swing.Triplet)} ms
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
