import { describe, it, expect, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils/renderWithProviders';
import i18n from '../../i18n';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  beforeEach(() => {
    i18n.changeLanguage('fr');
  });

  it('affiche le titre principal du hero', () => {
    renderWithProviders(<HomePage />);
    expect(
      screen.getByRole('heading', { level: 1, name: /partez sereins.*parlez avec confiance/i }),
    ).toBeInTheDocument();
  });

  it('propose un lien de contact en action principale', () => {
    renderWithProviders(<HomePage />);
    const link = screen.getByRole('link', { name: i18n.t('hero.ctaContact') });
    expect(link).toHaveAttribute('href', '/contact');
  });

  it('propose un lien vers les cours', () => {
    renderWithProviders(<HomePage />);
    const link = screen.getByRole('link', { name: i18n.t('hero.ctaCourses') });
    expect(link).toHaveAttribute('href', '/courses');
  });

  it('affiche les deux domaines : voyage et langues', () => {
    renderWithProviders(<HomePage />);
    expect(
      screen.getByRole('heading', { name: i18n.t('company.travel.title') }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: i18n.t('company.languages.title') }),
    ).toBeInTheDocument();
  });

  it('affiche les points de confiance', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText(i18n.t('trust.point1'))).toBeInTheDocument();
    expect(screen.getByText(i18n.t('trust.point2'))).toBeInTheDocument();
  });

  it('affiche les sections guide et blog', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByRole('heading', { name: i18n.t('guide.title') })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: i18n.t('blog.title') })).toBeInTheDocument();
  });

  it("propose un lien d'inscription dans la bande finale", () => {
    renderWithProviders(<HomePage />);
    const link = screen.getByRole('link', { name: i18n.t('cta.register') });
    expect(link).toHaveAttribute('href', '/register');
  });
});
