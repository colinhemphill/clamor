import { Alert, AlertDescription } from '@/components/ui/alert';
import { buttonVariants } from '../ui/button';
import AboutDialog from './AboutDialog';
import OpenSourceDialog from './OpenSourceDialog';

export default function Footer() {
  return (
    <footer className="mt-8 flex flex-col gap-2">
      <Alert>
        <AlertDescription className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex-grow">Download for desktop</div>

          <a
            className={buttonVariants({ size: 'sm', variant: 'secondary' })}
            href=""
          >
            Mac
          </a>
          <a
            className={buttonVariants({ size: 'sm', variant: 'secondary' })}
            href=""
          >
            Windows
          </a>
        </AlertDescription>
      </Alert>
      <Alert>
        <AlertDescription className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex-grow">
            © Copyright{' '}
            <a className="link" href="https://colinhemphill.com">
              Colin Hemphill
            </a>{' '}
            {new Date().getFullYear()}. All rights reserved.
          </div>

          <AboutDialog />
          <OpenSourceDialog />
        </AlertDescription>
      </Alert>
    </footer>
  );
}
