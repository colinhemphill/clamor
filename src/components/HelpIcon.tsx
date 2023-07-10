import { HelpCircle } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export default function HelpIcon({ children }: PropsWithChildren) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <HelpCircle className="inline-flex cursor-help" size="1em" />
      </TooltipTrigger>
      <TooltipContent>{children}</TooltipContent>
    </Tooltip>
  );
}
