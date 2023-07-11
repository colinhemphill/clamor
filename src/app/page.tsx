import Tempo from '@/components/Tempo';
import TimeChart from '@/components/TimeChart';

export default function MainPage() {
  return (
    <div className="flex flex-col gap-8">
      <Tempo />
      <TimeChart />
    </div>
  );
}
