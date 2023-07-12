import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ClamorLogo from '../ClamorLogo';

export default function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex-shrink" size="sm" variant="secondary">
          About
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About Clamor</DialogTitle>
          <ClamorLogo className="py-4" />
          <DialogDescription>
            Clamor was built by Colin Hemphill. Full time I’m a front end
            software engineer, and in my free time I am the producer and
            guitarist for{' '}
            <a className="link" href="https://dotdotdarknessmusic.com">
              dot.darkness
            </a>
            .
          </DialogDescription>
        </DialogHeader>
        <p>
          I created Clamor because many time division tools online are lacking
          features and are loaded with too much descriptive text to boost their
          SEO rankings. My goal was to include the following:
        </p>
        <ul className="list-inside list-disc">
          <li>Multiple ways to set tempo</li>
          <li>Tap tempo with averaging</li>
          <li>Clear way to view time divisions</li>
          <li>Clear way to view straight, dotted, and triplet divisions</li>
          <li>Compact and unintrusive UI</li>
          <li>Builds to web and desktop</li>
        </ul>
        <p>
          If you have any feedback, please use the contact form on{' '}
          <a className="link" href="https://colinhemphill.com">
            my website
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
