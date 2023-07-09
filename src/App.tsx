import Tempo from '@/components/Tempo';
import TimeChart from '@/components/TimeChart';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <div className="container max-w-screen-lg">
      <Tempo />
      <TimeChart />
      <Toaster />
    </div>
  );
}
