import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Work at Bellagent | Careers & Jobs',
  description: 'Join Bellagent and build the future of AI-powered business operations. Explore open roles at workatbellagent.com',
  metadataBase: new URL('https://workatbellagent.com'),
  openGraph: {
    title: 'Work at Bellagent | Careers',
    description: 'Join Bellagent and build the future of AI-powered business operations.',
    url: 'https://workatbellagent.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <link rel="icon" href="/data/fabicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
