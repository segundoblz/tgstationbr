import { store } from '../events/store';
import { localeAtom, translationsAtom } from './index';

export async function loadLocale(locale: string) {
  store.set(localeAtom, locale);

  if (locale === 'en') {
    store.set(translationsAtom, {});
    return;
  }

  try {
    const module = await import(`./locales/${locale}.json`);
    store.set(translationsAtom, module.default);
  } catch {
    store.set(translationsAtom, {});
  }
}
