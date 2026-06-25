import { useAtomValue } from 'jotai';

import { localeAtom, translationsAtom } from './index';

function applyParams(str: string, params?: Record<string, string>): string {
  if (!params) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? `{${k}}`);
}

export function useTranslation() {
  const locale = useAtomValue(localeAtom);
  const translations = useAtomValue(translationsAtom);

  return {
    t: (key: string, params?: Record<string, string>): string => {
      if (locale === 'en') return applyParams(key, params);
      return applyParams(translations[key] ?? key, params);
    },
    locale,
  };
}
