import { TableCell } from '@/app/components/ui/table';
import useTimeCalculations, { Swing } from '@/lib/hooks/useTimeCalculations';

interface TimeCellProps {
  beats: number;
  swing: Swing;
}

export default function TimeCell({ beats, swing }: TimeCellProps) {
  const { formattedTime } = useTimeCalculations(beats, swing);

  return <TableCell>{formattedTime}</TableCell>;
}
