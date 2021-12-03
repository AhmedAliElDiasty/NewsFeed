import i18n from 'i18n-js';
import ar from './ar';
import en from './en';
import {loadString} from '../utils/storage/storage';

i18n.fallbacks = true;
i18n.translations = {en, ar};

const key = 'lang';

(async function () {
  const a = await loadString(key);
  i18n.locale = a || 'ar';
})();
// setLang()
/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof en;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];
