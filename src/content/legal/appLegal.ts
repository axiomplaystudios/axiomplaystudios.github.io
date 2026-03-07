export const featuredAppSlug = 'weighsnap';

export const appLegalBySlug = {
  weighsnap: {
    appName: 'WeighSnap',
    privacyPath: '/projects/weighsnap/privacy',
    termsPath: '/projects/weighsnap/terms'
  }
} as const;

export type AppSlug = keyof typeof appLegalBySlug;
