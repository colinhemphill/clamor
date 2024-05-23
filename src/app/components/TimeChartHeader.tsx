import { TableHead, TableHeader, TableRow } from '@/app/components/ui/table';

export default function TimeChartHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Beats</TableHead>
        <TableHead className="w-4/12">Time</TableHead>
        <TableHead className="w-4/12">Rate</TableHead>
      </TableRow>
    </TableHeader>
  );
}
