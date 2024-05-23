import Tempo from '@/app/components/Tempo';
import TimeChart from '@/app/components/TimeChart';

export default function MainPage() {
  return (
    <div className="flex flex-col gap-8">
      <Tempo />
      <TimeChart />
    </div>
  );
}
