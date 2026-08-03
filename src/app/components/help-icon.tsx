import { HelpCircle } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export default function HelpIcon({ children }: PropsWithChildren) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="h-auto p-0" variant="ghost">
          <span className="sr-only">Help</span>
          <HelpCircle
            className="inline-flex cursor-help"
            name="Help icon"
            size="1em"
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{children}</TooltipContent>
    </Tooltip>
  );
}
