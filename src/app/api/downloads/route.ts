import { get } from '@vercel/edge-config';
import { NextResponse } from 'next/server';

export interface Downloads {
  mac: string;
  windows: string;
}

export async function GET(): Promise<NextResponse<Downloads>> {
  const mac = (await get('tauri-desktop-mac-download')) as string;
  const windows = (await get('tauri-desktop-windows-download')) as string;

  return NextResponse.json({ mac, windows });
}
