import weighsnapPrivacy from './weighsnap/privacy.md?raw';

export const featuredAppPrivacySlug = 'weighsnap';

export const appPrivacyBySlug = {
  weighsnap: {
    appName: 'WeighSnap',
    markdown: weighsnapPrivacy
  }
} as const;

export type AppPrivacySlug = keyof typeof appPrivacyBySlug;
