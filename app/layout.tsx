import Header from '@/components/header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noah Han',
  description: "Noah Han's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='max-w-md sm:max-w-4xl mx-auto'>
        <Header />
        {children}
      </body>
    </html>
  );
}
