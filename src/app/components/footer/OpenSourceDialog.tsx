import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function OpenSourceDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex-shrink" size="sm" variant="secondary">
          Open Source
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Open Source</DialogTitle>
          <DialogDescription>
            Clamor is made possible by these great frameworks and developer
            tools.
          </DialogDescription>
        </DialogHeader>
        <ul className="list-inside list-disc">
          <li>
            <a href="https://react.dev/">React</a>
          </li>
          <li>
            <a href="https://nextjs.org/">Next.js</a>
          </li>
          <li>
            <a href="https://tauri.app/">Tauri</a>
          </li>
          <li>
            <a href="https://jotai.org/">Jotai</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </li>
          <li>
            <a href="https://ui.shadcn.com/">shadcn/ui</a>
          </li>
          <li>
            <a href="https://lucide.dev/">Lucide Icons</a>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}
