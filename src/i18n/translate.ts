import i18n from 'i18n-js';
import {I18nManager} from 'react-native';
import {TxKeyPath} from './i18n';

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(key: TxKeyPath, options?: I18n.TranslateOptions) {
  I18nManager.isRTL ? (i18n.locale = 'ar') : (i18n.locale = 'en');
  return key ? i18n.t(key, options) : null;
}
