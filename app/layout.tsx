import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amrit Oli - Developer & Technology Enthusiast',
  description: 'Personal portfolio of Amrit Oli, showcasing skills, experience, and projects in software development and technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <link rel="icon" href="/favicon.ico" />
      </body>
    </html>
  );
}