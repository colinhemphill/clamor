import Tempo from '@/components/Tempo';
import TimeChart from '@/components/TimeChart';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="container max-w-screen-lg">
      <TooltipProvider>
        <Tempo />
        <TimeChart />
        <Toaster />
      </TooltipProvider>
      <Footer />
    </div>
  );
}
