import Heading from '@/components/Heading';
import Tempo from '@/components/Tempo';
import TimeChart from './components/TimeChart';

export default function App() {
  return (
    <div className="py-8">
      <div className="container max-w-screen-lg">
        <Heading level={1}>ADSR Helper</Heading>

        <div className="mt-8">
          <Tempo />
        </div>

        <div className="mt-8">
          <TimeChart />
        </div>
      </div>
    </div>
  );
}
