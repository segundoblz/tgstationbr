import { atom } from 'jotai';

import { store } from '../events/store';

type TranslationDict = Record<string, string>;

export const localeAtom = atom<string>('pt-br');
export const translationsAtom = atom<TranslationDict>({});

function applyParams(
  str: string,
  params?: Record<string, string>,
): string {
  if (!params) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? `{${k}}`);
}

export function t(key: string, params?: Record<string, string>): string {
  const locale = store.get(localeAtom);
  if (locale === 'en') return applyParams(key, params);

  const translations = store.get(translationsAtom);
  const translated = translations[key] ?? key;
  return applyParams(translated, params);
}
