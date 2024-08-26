/**
 * Locales
 */

import { I18n } from 'i18n-js'

import English from '@/locales/en'
import French from '@/locales/fr'
import Swahili from '@/locales/sw'

const Locales = new I18n({
  en: English,
  fr: French,
  sw: Swahili
})

Locales.enableFallback = true

export default Locales
