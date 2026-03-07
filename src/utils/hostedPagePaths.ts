import hostedPages from '../content/hosted-pages.json';

const hostedPagePathSet = new Set(hostedPages.pages.map((page) => page.path));

export const isHostedPagePath = (href: string) => hostedPagePathSet.has(href);
