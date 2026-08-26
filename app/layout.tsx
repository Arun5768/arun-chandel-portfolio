import type { Metadata } from 'next';
import { Archivo_Black, DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const display = Archivo_Black({ variable: '--font-display', weight: '400', subsets: ['latin'] });
const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const mono = IBM_Plex_Mono({ variable: '--font-mono', weight: ['400', '500', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arun Chandel — Community Operator & Automation Builder',
  description: 'Field notes, working builds and community programs by Arun Chandel, co-founder of The Origin Guild in Central India.',
  openGraph: {
    title: 'Arun Chandel — Community Operator & Automation Builder',
    description: 'I turn curious audiences into active builders through community programs, practical workshops and automation.',
    type: 'website',
    images: [{ url: '/og.png', width: 1729, height: 910, alt: 'Arun Chandel — community operator and automation builder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arun Chandel — Community Operator & Automation Builder',
    description: 'I turn curious audiences into active builders.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
