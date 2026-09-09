import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

const footerNavSections = [
  {
    titleKey: 'footer.nav',
    items: [
      { key: 'nav.home', path: '/' },
      { key: 'nav.travel', path: '/travel' },
      { key: 'nav.courses', path: '/courses' },
      { key: 'nav.guide', path: '/guide' },
      { key: 'nav.blog', path: '/blog' },
      { key: 'nav.contact', path: '/contact' },
    ],
  },
] as const;

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-700 bg-[#087fbd] text-sm text-white">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{t('footer.company')}</h3>
          <p className="mt-2 text-xs text-white/75">{t('footer.slogan')}</p>
          <div className="mt-4 space-y-2 text-white/85">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary-400" />
              {t('contact.address')}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary-400" />
              {t('contact.phone')}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary-400" />
              {t('contact.email')}
            </div>
          </div>
        </div>

        {footerNavSections.map((section) => (
          <div key={section.titleKey}>
            <h4 className="mb-3 text-sm font-semibold text-white">{t(section.titleKey)}</h4>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/85 hover:text-[#ffcb1e] transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">{t('footer.nav')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/legal" className="text-white/85 hover:text-[#ffcb1e] transition-colors">
                  {t('footer.legal')}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-white/85 hover:text-[#ffcb1e] transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      <div className="border-t border-white/20 px-4 py-4 text-center text-xs text-white/70">
        &copy; {year} {t('footer.company')} — {t('footer.rights')}
      </div>
    </footer>
  );
}
