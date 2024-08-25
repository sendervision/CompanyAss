/**
 * Locales
 */

import { I18n } from 'i18n-js'

import Arabic from '@/locales/ar'
import English from '@/locales/en'
import Turkish from '@/locales/tr'
import French from '@/locales/fr'
import Swahili from '@/locales/sw'

const Locales = new I18n({
  ar: Arabic,
  en: English,
  tr: Turkish,
  fr: French,
  sw: Swahili
})

Locales.enableFallback = true

export default Locales
