import { Metadata } from 'next';

export const metadataOpenGraphDefaults: Metadata['openGraph'] = {
  description:
    'Converts BPM to milliseconds so that you can apply musical timings to your compressors and synth ADSR settings. Features tap tempo plus tons of swings and divisions for whatever timing you need.',
  locale: 'en-US',
  title: {
    default: 'Clamor Studio',
    template: '%s | Clamor Studio',
  },
  type: 'website',
  url: 'https://clamor.studio',
};

export const metadataTwitterDefaults: Metadata['twitter'] = {
  creator: '@colin_hemphill',
  description:
    'Converts BPM to milliseconds so that you can apply musical timings to your compressors and synth ADSR settings. Features tap tempo plus tons of swings and divisions for whatever timing you need.',
  site: 'Clamor Studio',
  title: {
    default: 'Clamor Studio',
    template: '%s | Clamor Studio',
  },
};
