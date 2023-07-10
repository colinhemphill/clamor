import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export default function Footer() {
  return (
    <footer className="mt-8">
      <Alert>
        <AlertDescription className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex-grow">
            © Copyright <a href="https://colinhemphill.com">Colin Hemphill</a>{' '}
            {new Date().getFullYear()}. All rights reserved.
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex-shrink" size="sm" variant="secondary">
                About
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>About ADSR Helper</DialogTitle>
                <DialogDescription>
                  ADSR Helper was built by Colin Hemphill. Full time I’m a front
                  end software engineer, and in my free time I am the producer
                  and guitarist for{' '}
                  <a href="https://dotdotdarknessmusic.com">dot.darkness</a>.
                </DialogDescription>
              </DialogHeader>
              <p>
                I created ADSR Helper because many time division tools online
                are lacking features and are loaded with too much descriptive
                text to boost their SEO rankings. My goal was to include the
                following:
              </p>
              <ul className="list-inside list-disc">
                <li>Multiple ways to set tempo</li>
                <li>Tap tempo with averaging</li>
                <li>Clear way to view time divisions</li>
                <li>
                  Clear way to view straight, dotted, and triplet divisions
                </li>
                <li>Compact and unintrusive UI</li>
                <li>Builds to web and desktop</li>
              </ul>
              <p>
                If you have any feedback, please use the contact form on{' '}
                <a href="https://colinhemphill.com">my website</a>.
              </p>
            </DialogContent>
          </Dialog>

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
                  ADSR Helper is made possible by these great frameworks and
                  developer tools.
                </DialogDescription>
              </DialogHeader>
              <ul className="list-inside list-disc">
                <li>
                  <a href="https://react.dev/">React</a>
                </li>
                <li>
                  <a href="https://tauri.app/">Tauri</a>
                </li>
                <li>
                  <a href="https://vitejs.dev/">Vite</a>
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
        </AlertDescription>
      </Alert>
    </footer>
  );
}
