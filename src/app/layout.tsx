import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Figtree, Jost } from 'next/font/google';
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

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${figtree.variable} ${jost.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{ defaultTheme: 'light', enableSystem: false }}
          search={{ SearchDialog }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
