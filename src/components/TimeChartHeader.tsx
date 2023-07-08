import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TimeChartHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Beats</TableHead>
        <TableHead className="w-6/12">Time</TableHead>
      </TableRow>
    </TableHeader>
  );
}
