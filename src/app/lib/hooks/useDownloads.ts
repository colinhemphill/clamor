'use client';

import { Downloads } from '@/api/downloads/route';
import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<Downloads, string> = (path) =>
  fetch(path).then((res) => res.json());

export default function useDownloads() {
  const { data, isLoading, error } = useSWR('/api/downloads', fetcher);

  return {
    downloads: data,
    isLoading,
    error,
  };
}
