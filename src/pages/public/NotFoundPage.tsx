import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-primary-700">404</h1>
      <p className="mt-4 text-lg text-text">
        {t('notFound.message', 'Oops! The page you are looking for does not exist.')}
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700"
      >
        <Home className="h-5 w-5" />
        {t('nav.home')}
      </Link>
    </section>
  );
}
