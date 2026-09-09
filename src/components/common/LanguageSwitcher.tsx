import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { LANGUAGES } from '../../i18n/languages';
import type { LanguageCode } from '../../i18n/languages';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0] as LanguageCode;

  const handleChange = (lng: LanguageCode) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative inline-flex items-center gap-1 rounded-lg bg-dark-100/50 p-1 text-sm">
      <Languages className="h-4 w-4 text-text" />
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => handleChange(code)}
          className={
            currentLang === code
              ? 'rounded-md bg-primary-600 px-3 py-1.5 text-white transition-all'
              : 'px-3 py-1.5 text-text hover:text-primary-700 transition-colors'
          }
          aria-label={t('nav.language')}
          aria-pressed={currentLang === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
