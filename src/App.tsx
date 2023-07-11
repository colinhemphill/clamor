import Tempo from '@/components/Tempo';
import TimeChart from '@/components/TimeChart';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <TooltipProvider>
      <div className="container flex max-w-screen-lg flex-col gap-8">
        <Tempo />
        <TimeChart />
        <Footer />
      </div>
      <Toaster />
      <Analytics />
    </TooltipProvider>
  );
}
