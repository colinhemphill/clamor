import { TableCell } from '@/app/components/ui/table';
import useTimeCalculations, { Swing } from '@/lib/hooks/useTimeCalculations';

interface RateCellProps {
  beats: number;
  swing: Swing;
}

export default function RateCell({ beats, swing }: RateCellProps) {
  const { formattedRate } = useTimeCalculations(beats, swing);

  return <TableCell>{formattedRate}</TableCell>;
}
