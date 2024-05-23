import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { Github } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import AboutDialog from './AboutDialog';
import Downloads from './Downloads';
import OpenSourceDialog from './OpenSourceDialog';

export default function Footer() {
  return (
    <footer className="mt-8 flex flex-col gap-2">
      <Downloads />

      <Alert>
        <AlertDescription className="flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground md:flex-row">
          <div className="flex-grow">
            © Copyright{' '}
            <a className="link" href="https://colinhemphill.com">
              Colin Hemphill
            </a>{' '}
            {new Date().getFullYear()}. All rights reserved.
          </div>

          <AboutDialog />
          <OpenSourceDialog />
          <a
            className={buttonVariants({ variant: 'secondary', size: 'icon' })}
            href="https://github.com/colinhemphill/clamor"
          >
            <span className="sr-only">GitHub</span>
            <Github size="1.25em" />
          </a>
        </AlertDescription>
      </Alert>
    </footer>
  );
}
