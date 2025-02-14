import i18next, { TFunction } from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import en from './languages/en.json';
import vi from './languages/vi.json';

export const i18n: Promise<TFunction<'translation', undefined>> = i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'vi',
    fallbackLng: 'vi',
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
  });
