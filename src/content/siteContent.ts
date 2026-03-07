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

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectFaq {
  question: string;
  answer: string;
}

export interface ProjectChangelogItem {
  version: string;
  date: string;
  highlights: readonly string[];
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tag: string;
  oneLiner: string;
  overview: string;
  playStoreUrl: string;
  heroImage: string;
  screenshots: readonly string[];
  walkthroughVideoUrl?: string;
  features: readonly ProjectFeature[];
  faq: readonly ProjectFaq[];
  changelog: readonly ProjectChangelogItem[];
  supportEmail: string;
  reviewQuote?: {
    quote: string;
    source: string;
  };
}

export const siteContent = {
  brand: {
    name: 'Axiomplay Studios',
    tagline: 'Precision-built digital experiences.',
    intro:
      'Axiomplay Studios designs focused mobile products where speed, clarity, and visual craft work together. We keep the studio front page intentionally high-level, with deep product information inside dedicated project pages.'
  },
  announcement: {
    enabled: false,
    label: '',
    link: {
      text: '',
      href: '#home'
    }
  },
  nav: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'studio', label: 'Studio', href: '#studio' },
    { id: 'support', label: 'Support', href: '/support/' },
    { id: 'legal', label: 'WeighSnap Privacy Policy', href: '/projects/weighsnap/privacy/' }
  ],
  hero: {
    primaryCta: {
      label: 'Download on Play Store',
      href: 'https://play.google.com/store/apps/details?id=com.axiomplaystudios.weighsnap'
    },
    secondaryCta: { label: 'Explore WeighSnap', href: '/projects/weighsnap' }
  },
  projects: {
    featuredId: 'weighsnap',
    list: [
      {
        id: 'weighsnap',
        slug: 'weighsnap',
        name: 'WeighSnap',
        tag: 'Health and Wellness',
        oneLiner: 'Track weight trends in seconds with a clean, calm, and focused workflow.',
        overview:
          'WeighSnap helps people build consistency with simple weight logging, trend clarity, and progress visibility that stays useful over time. The interface is intentionally minimal so users can log fast and stay focused on habits, not friction.',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.axiomplaystudios.weighsnap',
        heroImage: '/images/weighsnap/weighsnap-hero.svg',
        screenshots: [
          '/images/weighsnap/weighsnap-screen-01.svg',
          '/images/weighsnap/weighsnap-screen-02.svg',
          '/images/weighsnap/weighsnap-screen-03.svg'
        ],
        walkthroughVideoUrl: '',
        features: [
          {
            title: 'Fast daily check-ins',
            description: 'Log your entry quickly and return to your day without unnecessary steps.'
          },
          {
            title: 'Trend-first insights',
            description:
              'See progress direction across weeks and months so normal short-term noise does not distract you.'
          },
          {
            title: 'Calm and readable UI',
            description:
              'A focused interface designed to reduce cognitive load and keep habit tracking sustainable.'
          }
        ],
        faq: [
          {
            question: 'Is WeighSnap free to use?',
            answer: 'Yes. Core tracking is available without a paid plan.'
          },
          {
            question: 'Can I use WeighSnap every day?',
            answer:
              'Yes. It is built for quick daily logging and long-term consistency without complex setup.'
          },
          {
            question: 'How do I contact support?',
            answer: 'Use axiomplaystudios@gmail.com and include your device model and app version.'
          }
        ],
        changelog: [
          {
            version: 'v1.2.0',
            date: 'February 20, 2026',
            highlights: [
              'Improved chart readability on smaller Android devices',
              'Faster app startup on low-memory phones',
              'Refined onboarding copy for first-time users'
            ]
          },
          {
            version: 'v1.1.0',
            date: 'January 10, 2026',
            highlights: [
              'Added streak-friendly reminders',
              'Improved trend smoothing for weekly view'
            ]
          }
        ],
        supportEmail: 'axiomplaystudios@gmail.com',
        reviewQuote: {
          quote: 'Simple, fast, and exactly what daily tracking should feel like.',
          source: 'Early user feedback'
        }
      }
    ] as const satisfies readonly Project[]
  },
  games: {
    title: 'Featured product',
    subtitle: 'One focused app, built with long-term usability in mind.',
    list: [
      {
        id: 'weighsnap',
        title: 'WeighSnap',
        description: 'Weight tracking that is quick to use, clear to read, and easy to stick with.',
        status: 'Released',
        platforms: ['Android'],
        coverImage: '/images/weighsnap/weighsnap-hero.svg',
        storeLinks: {
          googlePlay: 'https://play.google.com/store/apps/details?id=com.axiomplaystudios.weighsnap'
        },
        details: {
          summary:
            'WeighSnap is designed for habit consistency with rapid logging, calm visuals, and trend-focused progress tracking.',
          features: [
            'Daily logging flow optimized for speed',
            'Readable charts that focus on trend direction',
            'Minimal interface that avoids distraction'
          ]
        }
      }
    ] as const satisfies readonly Game[]
  },
  studio: {
    title: 'Craft over noise.',
    mission:
      'Axiomplay Studios builds focused mobile products that feel premium through precision, restraint, and long-term reliability.',
    values: [
      {
        title: 'Clarity',
        description: 'Every screen is designed for instant comprehension and calm flow.'
      },
      {
        title: 'Consistency',
        description: 'Interactions and visuals stay coherent across every feature.'
      },
      {
        title: 'Reliability',
        description: 'Performance and stability are treated as product features.'
      }
    ],
    timeline: [
      {
        year: '2022',
        title: 'Studio formed',
        description: 'Axiomplay began with a product-first approach for mobile experiences.'
      },
      {
        year: '2025',
        title: 'WeighSnap launched',
        description: 'First public release focused on frictionless weight tracking.'
      },
      {
        year: '2026',
        title: 'Refinement phase',
        description: 'Shipping iterative quality updates based on real user behavior.'
      }
    ]
  },
  pressKit: {
    title: 'Press kit',
    subtitle: 'Download approved assets and brand references for coverage and partnerships.',
    brandColors: ['#0b1220', '#111a2e', '#2c6bff', '#61c7ff', '#f5f8ff'],
    downloads: [
      {
        title: 'Brand logo lockup',
        description: 'Primary horizontal logo lockup.',
        href: '/brand/logo-lockup-dark.svg'
      },
      {
        title: 'Brand colors',
        description: 'Current palette and token mapping.',
        href: '/brand/brand-colors.txt'
      },
      {
        title: 'WeighSnap hero visual',
        description: 'Hero artwork for media and previews.',
        href: '/images/weighsnap/weighsnap-hero.svg'
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
    title: 'Let us build something focused.',
    subtitle: 'For press, partnerships, or studio inquiries, contact us anytime.',
    email: 'hello@axiomplaystudios.com',
    socials: [
      { label: 'X / Twitter', href: 'https://twitter.com' },
      { label: 'YouTube', href: 'https://www.youtube.com' },
      { label: 'Discord', href: 'https://discord.com' },
      { label: 'GitHub', href: 'https://github.com' }
    ]
  },
  legal: {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'February 28, 2026',
      summary:
        'This policy explains how Axiomplay Studios collects, uses, and protects information when you interact with WeighSnap and our website.',
      sections: [
        {
          heading: 'Information we collect',
          body:
            'We collect only data required to operate WeighSnap and this website, such as app usage analytics, device identifiers, and support information that you provide voluntarily.'
        },
        {
          heading: 'How we use data',
          body:
            'Data is used to improve app quality, resolve issues, and respond to support requests.'
        },
        {
          heading: 'Your choices',
          body:
            'You can request support-data deletion and opt out of non-essential analytics where available.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'February 28, 2026',
      summary:
        'These terms cover your use of WeighSnap and Axiomplay Studios web properties. Terms may be updated as products evolve.',
      sections: [
        {
          heading: 'Acceptable use',
          body:
            'You agree not to misuse the service, reverse engineer application binaries, or disrupt service availability.'
        },
        {
          heading: 'Content ownership',
          body:
            'All brand and app materials remain the property of Axiomplay Studios. Usage is limited to personal, non-transferable access.'
        },
        {
          heading: 'Service updates',
          body:
            'We may modify or discontinue features in order to improve reliability, security, or product quality.'
        }
      ]
    }
  },
  footer: {
    copyright: `Copyright ${new Date().getFullYear()} Axiomplay Studios. All rights reserved.`,
    privacyHref: '/projects/weighsnap/privacy/',
    termsHref: '/projects/weighsnap/terms/',
    studioLinks: [
      { label: 'About', href: '#studio' },
      { label: 'WeighSnap', href: '/projects/weighsnap' },
      { label: 'Support', href: '/support/' }
    ],
    legalLinks: [
      { label: 'WeighSnap Privacy Policy', href: '/projects/weighsnap/privacy/' },
      { label: 'WeighSnap Terms of Service', href: '/projects/weighsnap/terms/' },
      { label: 'Cookie Policy', href: '/projects/weighsnap/privacy/' }
    ],
    connectLinks: [
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'YouTube', href: 'https://www.youtube.com' },
      { label: 'Discord', href: 'https://discord.com' },
      { label: 'Email', href: 'mailto:hello@axiomplaystudios.com' }
    ]
  }
} as const;
