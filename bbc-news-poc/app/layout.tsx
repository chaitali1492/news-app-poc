import './globals.css';
import { Inter } from 'next/font/google';
import ThemeRegistry from './themeRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'News App',
  description: 'A Next.js app with Material-UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
