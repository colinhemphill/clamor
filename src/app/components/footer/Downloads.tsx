'use client';

import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { buttonVariants } from '@/app/components/ui/button';

export default function Downloads() {
  return (
    <Alert>
      <AlertDescription className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:flex-row">
        <div className="flex-grow">Download for desktop</div>
        <a
          className={buttonVariants({ size: 'sm', variant: 'secondary' })}
          href="https://github.com/colinhemphill/clamor/releases/download/1.0.0/Clamor.Studio_1.0.0_aarch64.dmg"
        >
          Mac
        </a>
        <a
          className={buttonVariants({ size: 'sm', variant: 'secondary' })}
          href="https://github.com/colinhemphill/clamor/releases/download/1.0.0/Clamor.Studio_1.0.0_x64_en-US.msi"
        >
          Windows
        </a>
      </AlertDescription>
    </Alert>
  );
}
