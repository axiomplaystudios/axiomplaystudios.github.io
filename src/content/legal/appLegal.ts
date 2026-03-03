import weighsnapPrivacy from './weighsnap/privacy.md?raw';
import weighsnapTerms from './weighsnap/terms.md?raw';

export const featuredAppSlug = 'weighsnap';

export const appLegalBySlug = {
  weighsnap: {
    appName: 'WeighSnap',
    privacyMarkdown: weighsnapPrivacy,
    termsMarkdown: weighsnapTerms
  }
} as const;

export type AppSlug = keyof typeof appLegalBySlug;
