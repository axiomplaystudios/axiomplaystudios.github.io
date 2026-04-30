import hostedPages from '../content/hosted-pages.json';

const hostedPagePathSet = new Set(hostedPages.pages);

export const isHostedPagePath = (href: string) => hostedPagePathSet.has(href);
