export type GameStatus = 'Released' | 'In Development' | 'Prototype';

export interface GameStoreLinks {
  googlePlay?: string;
  appStore?: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  status: GameStatus;
  platforms: readonly string[];
  coverImage: string;
  storeLinks: GameStoreLinks;
  details: {
    summary: string;
    features: readonly string[];
  };
}

export const siteContent = {
  brand: {
    name: 'Axiomplay Studios',
    tagline: 'Small studio. Big worlds.',
    intro:
      'We craft premium Android and iOS games with tactile controls, crisp visuals, and low-latency performance. Our small team obsesses over the feel of every tap and swipe, so each release is fast, accessible, and deeply polished.'
  },
  announcement: {
    enabled: true,
    label: 'Now prototyping a new roguelike-lite.',
    link: {
      text: 'See the studio timeline',
      href: '#studio'
    }
  },
  nav: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'games', label: 'Games', href: '#games' },
    { id: 'studio', label: 'Studio', href: '#studio' },
    { id: 'press', label: 'Press Kit', href: '#press' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ],
  hero: {
    primaryCta: { label: 'View Games', href: '#games' },
    secondaryCta: { label: 'Contact', href: '#contact' }
  },
  games: {
    title: 'Games built for modern mobile.',
    subtitle: 'Tight feedback loops, clear readability, and performance tuned for a wide range of devices.',
    list: [
      {
        id: 'lumen-loom',
        title: 'Lumen Loom',
        description: 'A calming puzzle of weaving light across shifting tiles in bite-sized sessions.',
        status: 'Released',
        platforms: ['Android', 'iOS'],
        coverImage: '/images/games/lumen-loom.svg',
        storeLinks: {
          googlePlay: 'https://play.google.com/store',
          appStore: 'https://www.apple.com/app-store/'
        },
        details: {
          summary:
            'Solve elegant light puzzles that scale in complexity while staying friendly to casual players.',
          features: [
            'Daily challenges with curated layouts',
            'Offline play with low battery usage',
            'Accessibility-first color modes'
          ]
        }
      },
      {
        id: 'neon-runshift',
        title: 'Neon Runshift',
        description: 'High-speed arcade dodging with combo chains, perfect for quick bursts.',
        status: 'In Development',
        platforms: ['Android', 'iOS'],
        coverImage: '/images/games/neon-runshift.svg',
        storeLinks: {},
        details: {
          summary:
            'An arcade racer-meets-dodger where precision timing and flow state build massive scores.',
          features: [
            'Dynamic obstacle lanes with adaptive difficulty',
            'One-thumb controls tuned for mobile ergonomics',
            'Seasonal scoreboards and unlockable trails'
          ]
        }
      },
      {
        id: 'emberline-tactics',
        title: 'Emberline Tactics',
        description: 'A narrative roguelike-lite where every run reshapes the story map.',
        status: 'Prototype',
        platforms: ['Android', 'iOS'],
        coverImage: '/images/games/emberline-tactics.svg',
        storeLinks: {},
        details: {
          summary:
            'Build a squad, forge alliances, and decide how the city evolves across interconnected runs.',
          features: [
            'Branching story nodes with persistent consequences',
            'Strategic combat tuned for short sessions',
            'Meta upgrades that respect player time'
          ]
        }
      }
    ]
  },
  studio: {
    title: 'The studio behind the polish.',
    mission:
      'Axiomplay Studios exists to make mobile games feel premium and effortless. We focus on responsiveness, stability, and player-first systems that reward curiosity and mastery.',
    values: [
      {
        title: 'Performance',
        description: 'Stable frame rates, tight input, and battery-friendly builds.'
      },
      {
        title: 'Player-first design',
        description: 'Every mechanic is tuned for clarity, comfort, and joy.'
      },
      {
        title: 'Fast iteration',
        description: 'We ship prototypes quickly and refine based on real play.'
      },
      {
        title: 'Accessibility',
        description: 'Multiple control modes, readable UI, and inclusive defaults.'
      }
    ],
    timeline: [
      {
        year: '2022',
        title: 'Studio founded',
        description: 'A small remote team formed around mobile-first craftsmanship.'
      },
      {
        year: '2023',
        title: 'First public prototype',
        description: 'Early puzzle concepts tested with a small community.'
      },
      {
        year: '2024',
        title: 'Pipeline upgrade',
        description: 'New tooling for faster iteration, QA, and performance profiling.'
      },
      {
        year: '2026',
        title: 'New narrative IP',
        description: 'Expanding into story-driven roguelike-lite experiences.'
      }
    ]
  },
  pressKit: {
    title: 'Press kit',
    subtitle: 'Download approved assets and brand references for coverage and partnerships.',
    brandColors: ['#0b0d16', '#111427', '#27e0a5', '#4f7dff', '#ffb347'],
    downloads: [
      {
        title: 'Logo pack (SVG + PNG)',
        description: 'Primary lockup and monochrome mark.',
        href: '/press-kit/logo-pack.zip'
      },
      {
        title: 'Brand colors',
        description: 'Hex values and usage notes.',
        href: '/press-kit/brand-colors.txt'
      },
      {
        title: 'Studio screenshots',
        description: 'High-resolution placeholders for mockups.',
        href: '/press-kit/screenshots.zip'
      }
    ],
    usageGuidelines: [
      'Do not alter the logo geometry or proportions.',
      'Use approved colors on dark or neutral backgrounds.',
      'Credit Axiomplay Studios when publishing screenshots.'
    ],
    pressContact: 'press@axiomplaystudios.com'
  },
  contact: {
    title: 'Let us build something together.',
    subtitle:
      'For partnerships, publishing, or collaboration opportunities, reach out and we will respond quickly.',
    email: 'hello@axiomplaystudios.com',
    socials: [
      { label: 'X / Twitter', href: 'https://twitter.com' },
      { label: 'YouTube', href: 'https://www.youtube.com' },
      { label: 'Discord', href: 'https://discord.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com' }
    ]
  },
  legal: {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'February 3, 2026',
      summary:
        'This policy explains how Axiomplay Studios collects, uses, and protects information when you interact with our games and website.',
      sections: [
        {
          heading: 'Information we collect',
          body:
            'We collect only the data needed to operate our games and website, such as gameplay analytics, device identifiers, and basic contact information you provide voluntarily.'
        },
        {
          heading: 'How we use data',
          body:
            'Data is used to improve gameplay, troubleshoot issues, and communicate with players about updates or support requests.'
        },
        {
          heading: 'Your choices',
          body:
            'You can opt out of non-essential analytics where supported, and request deletion of support emails at any time.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'February 3, 2026',
      summary:
        'These terms cover your use of Axiomplay Studios games and services. They are not legal advice and may be updated as we expand our offerings.',
      sections: [
        {
          heading: 'Acceptable use',
          body:
            'You agree not to misuse our services, reverse engineer our games, or disrupt the experience for other players.'
        },
        {
          heading: 'Game content',
          body:
            'All game content remains the property of Axiomplay Studios. Purchases grant a personal, non-transferable license to access content.'
        },
        {
          heading: 'Updates and availability',
          body:
            'We may update, modify, or discontinue features to maintain quality and security. We will aim to notify players about major changes.'
        }
      ]
    }
  },
  footer: {
    copyright: `Copyright ${new Date().getFullYear()} Axiomplay Studios. All rights reserved.`,
    privacyHref: '/privacy',
    termsHref: '/terms'
  }
} as const;
