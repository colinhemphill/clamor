import Footer from '@/app/components/footer/Footer';
import { Toaster } from '@/app/components/ui/toaster';
import { TooltipProvider } from '@/app/components/ui/tooltip';
import {
  metadataOpenGraphDefaults,
  metadataTwitterDefaults,
} from '@/lib/metadata';
import { IS_TAURI } from '@/lib/utils';
import { Metadata, Viewport } from 'next';
import { PropsWithChildren } from 'react';
import './globals.css';

export const metadata: Metadata = {
  // https://beta.nextjs.org/docs/api-reference/metadata#metadatabase
  metadataBase: new URL('https://clamor.studio'),

  applicationName: 'Clamor Studio',
  authors: { name: 'Colin Hemphill' },
  creator: 'Colin Hemphill',
  description:
    'Converts BPM to milliseconds so that you can apply musical timings to your compressors and synth ADSR settings. Features tap tempo plus tons of swings and divisions for whatever timing you need.',
  generator: 'Next.js',
  openGraph: metadataOpenGraphDefaults,
  icons: [],
  keywords: [
    'clamor',
    'studio',
    'adsr',
    'tempo',
    'bpm',
    'ms',
    'conversion',
    'music',
    'production',
    'timing',
  ],
  publisher: 'Colin Hemphill',
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: 'Clamor Studio',
    template: '%s | Clamor Studio',
  },
  twitter: metadataTwitterDefaults,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function App({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <TooltipProvider>
          <div className="container max-w-screen-lg py-8">
            <main>{children}</main>

            {!IS_TAURI && <Footer />}
          </div>
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
