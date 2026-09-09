import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button';
import { LanguageSwitcher } from './LanguageSwitcher';

const navItems = [
  { key: 'home', path: '/' },
  { key: 'travel', path: '/travel' },
  { key: 'courses', path: '/courses' },
  { key: 'guide', path: '/guide' },
  { key: 'blog', path: '/blog' },
  { key: 'contact', path: '/contact' },
] as const;

export function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#e8e5df] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container mx-auto flex items-center justify-between px-4 py-3.5">
        <Link to="/" className="flex items-center gap-3" aria-label="God Favor Solution">
          <img
            src="/images/god-favor-logo2.jpeg"
            alt="God Favor Solution logo"
            className="h-12 w-12 rounded-xl object-cover"
          />
          <span className="hidden leading-tight text-[15px] font-bold tracking-tight text-primary-700 sm:inline">
            GOD FAVOR
            <br />
            <span className="text-[10px] tracking-[0.2em] text-text-h">SOLUTION</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label="Main navigation">
          {navItems.map(({ key, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? 'text-primary-700 font-semibold'
                  : 'text-text-h hover:text-primary-700 transition-colors'
              }
            >
              {t(`nav.${key}`)}
            </NavLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <NavLink to="/login" className="text-sm text-text-h hover:text-primary-700">
            {t('nav.login')}
          </NavLink>
          <Button
            to="/register"
            variant="primary"
            size="sm"
            className="rounded-full bg-[#ffcb1e] px-5 !text-[#102936] shadow-sm hover:bg-[#f4bb05]"
            icon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            {t('nav.register')}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border lg:hidden">
          <nav className="flex flex-col gap-2 p-4" aria-label="Mobile navigation">
            {navItems.map(({ key, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  'block py-2' +
                  (isActive ? ' text-primary-700 font-medium' : ' text-text hover:text-primary-700')
                }
              >
                {t(`nav.${key}`)}
              </NavLink>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <div className="flex gap-3 pt-2">
              <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                {t('nav.login')}
              </NavLink>
              <Button
                to="/register"
                variant="primary"
                size="sm"
                className="bg-[#ffcb1e] !text-[#102936] hover:bg-[#f4bb05]"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.register')}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
