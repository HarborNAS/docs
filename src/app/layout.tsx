import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import SearchDialog from '@/components/search';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.harboros.ai'),
  title: {
    default: 'HarborOS Documentation',
    template: '%s | HarborOS Docs',
  },
  description: 'HarborOS getting started, configuration help, and community support.',
};

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{
    SearchDialog,
  }}>{children}</RootProvider>
      </body>
    </html>
  );
}
