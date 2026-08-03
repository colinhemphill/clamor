import Tempo from '@/app/components/tempo';
import TimeChart from '@/app/components/time-chart';

export default function MainPage() {
  return (
    <div className="flex flex-col gap-8">
      <Tempo />
      <TimeChart />
    </div>
  );
}
