import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import BootstrapClient from '@/components/BootstrapClient';
import AppNavbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '테니스 협회',
  description: '테니스 협회 클럽 및 회원 관리 시스템',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AppNavbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
