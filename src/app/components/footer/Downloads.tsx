'use client';

import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { buttonVariants } from '@/app/components/ui/button';
import { Skeleton } from '@/app/components/ui/skeleton';
import useDownloads from '@/lib/hooks/useDownloads';

export default function Downloads() {
  const { downloads, isLoading } = useDownloads();

  return (
    <Alert>
      <AlertDescription className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:flex-row">
        <div className="flex-grow">Download for desktop</div>

        {(!downloads || isLoading) && (
          <>
            <Skeleton className="h-8 w-[48px] rounded-md" />
            <Skeleton className="h-8 w-[77px] rounded-md" />
          </>
        )}
        {downloads?.mac && (
          <a
            className={buttonVariants({ size: 'sm', variant: 'secondary' })}
            href={downloads.mac}
          >
            Mac
          </a>
        )}
        {downloads?.windows && (
          <a
            className={buttonVariants({ size: 'sm', variant: 'secondary' })}
            href={downloads.windows}
          >
            Windows
          </a>
        )}
      </AlertDescription>
    </Alert>
  );
}
