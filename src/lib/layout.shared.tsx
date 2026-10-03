import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="harbor-brand">
          {/* Reuse the official storefront logo, designed for a dark header. */}
          <img
            src="https://harboros.ai/cdn/shop/files/20260326164032_9595_1168.png?height=60&v=1774514449"
            alt="Harbor Innovations"
            width={110}
            height={30}
          />
          <span className="harbor-brand-label">Docs</span>
        </span>
      ),
    },
    themeSwitch: { mode: 'light-dark' },
    links: [
      { text: 'Docs', url: '/docs/' },
      { text: 'Downloads & Support', url: '/docs/downloads-support/' },
      { text: 'Guides', url: '/docs/application-guides/' },
      {
        text: 'Community',
        url: 'https://github.com/HarborNAS/community',
        external: true,
      },
    ],
  };
}
