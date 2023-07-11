import { Alert, AlertDescription } from '@/components/ui/alert';
import AboutDialog from './AboutDialog';
import OpenSourceDialog from './OpenSourceDialog';

export default function Footer() {
  return (
    <footer>
      <Alert>
        <AlertDescription className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex-grow">
            © Copyright <a href="https://colinhemphill.com">Colin Hemphill</a>{' '}
            {new Date().getFullYear()}. All rights reserved.
          </div>

          <AboutDialog />
          <OpenSourceDialog />
        </AlertDescription>
      </Alert>
    </footer>
  );
}
