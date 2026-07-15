import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  tr: () => import('./tr.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'tr') => {
  const safeLocale = dictionaries[locale] ? locale : 'en';
  return dictionaries[safeLocale]();
};