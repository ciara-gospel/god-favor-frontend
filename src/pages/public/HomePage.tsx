import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  Plane,
  GraduationCap,
  Compass,
  Newspaper,
  ArrowRight,
  Presentation,
  Palette,
  BriefcaseBusiness,
  Globe2,
  MapPin,
  Check,
  Languages,
  FileCheck2,
} from 'lucide-react';
import { Button } from '../../components/common/Button';

const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <AnnouncementBar />
      <HeroSection />
      <CompanySection />
      <TrainingSection />
      <MobilitySection />
      <LocationSection />
      <GuideAndBlogSection />
      <CtaBanner />
    </div>
  );

  function AnnouncementBar() {
    return (
      <div className="bg-primary-600 py-2 text-center text-xs font-semibold text-white sm:text-sm">
        {t('hero.announcement')}
      </div>
    );
  }

  function HeroSection() {
    return (
      <section className="overflow-hidden bg-[#fffefa]">
        <div className="container mx-auto grid items-center gap-10 px-4 py-12 sm:py-14 md:grid-cols-[1.04fr_.96fr] md:gap-8 lg:gap-16 lg:py-20">
          <div className="relative z-10">
            <span className="group inline-flex items-center gap-2 rounded-full border border-[#8bd2f3] bg-gradient-to-r from-[#e9f8ff] via-white to-[#fff8da] px-4 py-2 text-[11px] font-extrabold tracking-[0.13em] text-primary-700 shadow-[0_8px_24px_rgba(8,127,189,0.14)] transition-transform duration-300 hover:-translate-y-0.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#087fbd] text-[#ffcb1e] shadow-sm">
                <Sparkles className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
              </span>
              {t('hero.badge')}
              <ArrowRight className="h-3.5 w-3.5 text-[#e39a00]" />
            </span>

            <h1 className="mt-6 max-w-xl font-display text-[42px] leading-[.98] text-[#102936] sm:text-6xl md:text-5xl lg:text-7xl">
              <span>{t('hero.headlineLine1')}</span>{' '}
              <span className="text-primary-600">{t('hero.headlineLine2')}</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#5d6971] sm:text-[17px] sm:leading-8 md:text-base md:leading-7 lg:text-[17px] lg:leading-8">
              {t('hero.tagline')}
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:flex-col md:items-stretch lg:flex-row lg:items-center">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="rounded-full bg-[#ffcb1e] px-6 !text-[#102936] shadow-lg shadow-yellow-500/20 hover:bg-[#f4bb05]"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                {t('hero.ctaContact')}
              </Button>
              <Button
                to="/courses"
                variant="outline"
                size="md"
                className="rounded-full border-[#cbdce4] px-6 text-[#173042]"
              >
                {t('hero.ctaCourses')}
              </Button>
            </div>

            <div className="mt-9 flex flex-col gap-3 border-t border-[#d8e2e4] pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-8 md:flex-col lg:flex-row">
              <span className="flex items-center gap-2 text-sm text-text">
                <CheckCircle2 className="h-4 w-4 text-primary-600" />
                {t('trust.point1')}
              </span>
              <span className="flex items-center gap-2 text-sm text-text">
                <CheckCircle2 className="h-4 w-4 text-primary-600" />
                {t('trust.point2')}
              </span>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[365px] w-full max-w-[510px] items-center justify-center sm:min-h-[500px] md:min-h-[440px] lg:min-h-[500px]">
            <div className="absolute right-0 top-0 h-[72%] w-[78%] rounded-[3rem] bg-[#ffcb1e]" />
            <div className="absolute bottom-0 left-0 h-[58%] w-[68%] rounded-[2.6rem] bg-[#ff9f3d]" />
            <div className="absolute bottom-9 left-[18%] h-24 w-24 rounded-full bg-[#ef4438]" />
            <div className="absolute right-7 top-10 h-8 w-8 rounded-full border-4 border-white/80" />

            <div className="relative z-10 sm:translate-x-5">
              <img
                src="/images/hero-travel.jpeg"
                alt="Paysage évoquant le voyage et la découverte"
                className="h-[295px] w-[220px] rounded-[6rem_6rem_2.8rem_2.8rem] border-[6px] border-white object-cover shadow-2xl sm:h-[415px] sm:w-[310px] sm:rounded-[7rem_7rem_2.8rem_2.8rem] sm:border-[7px] md:h-[350px] md:w-[260px] lg:h-[415px] lg:w-[310px]"
              />
              <div className="absolute bottom-5 left-6 text-white drop-shadow-md">
                <p className="text-[10px] font-bold tracking-[0.2em] text-yellow-300">
                  VOTRE PROCHAINE ÉTAPE
                </p>
                <p className="mt-1 font-display text-2xl">Commence ici.</p>
              </div>

              <div className="absolute -left-6 top-4 w-40 rounded-2xl border border-white bg-white p-3 shadow-xl sm:-left-32 sm:top-7 sm:w-48 sm:p-4 md:-left-16 md:top-5 md:w-40 md:p-3 lg:-left-32 lg:top-7 lg:w-48 lg:p-4">
                <div className="flex items-center gap-2 text-xs font-medium text-text-h">
                  <Plane className="h-4 w-4 text-primary-600" />
                  Destination
                </div>
                <p className="mt-2 font-display text-base text-[#173042] sm:mt-3 sm:text-lg">
                  Le monde vous attend
                </p>
                <div className="mt-3 h-1.5 w-full rounded-full bg-[#efeee9]">
                  <div className="h-full w-3/4 rounded-full bg-[#ffcb1e]" />
                </div>
              </div>

              <div className="absolute -bottom-5 -right-12 hidden w-44 rounded-2xl border border-white bg-white p-4 shadow-xl sm:block md:-right-7 md:w-36 md:p-3 lg:-right-12 lg:w-44 lg:p-4">
                <div className="flex items-center gap-2 text-xs font-medium text-text-h">
                  <GraduationCap className="h-4 w-4 text-secondary-600" />
                  Cours de langues
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {CEFR_LEVELS.map((level) => (
                    <span
                      key={level}
                      className="rounded-full bg-[#f6f4ed] px-1.5 py-0.5 text-[10px] text-text"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function CompanySection() {
    return (
      <section className="bg-[#f6f8f6] py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[.18em] text-primary-600">
              God Favor Solution Sarl
            </span>
            <h2 className="mt-3 font-display text-4xl text-[#173042]">{t('company.title')}</h2>
          </div>
          <div className="mx-auto mt-9 grid max-w-5xl gap-6 sm:mt-12 md:grid-cols-2">
            <div className="rounded-3xl border border-[#e5e8e3] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 sm:p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50">
                <Plane className="h-6 w-6 text-primary-600" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-[#173042]">
                {t('company.travel.title')}
              </h3>
              <p className="mt-3 text-sm text-text">{t('company.travel.description')}</p>
              <Link
                to="/travel"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:text-primary-600"
              >
                {t('company.travel.cta')}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-3xl border border-[#e5e8e3] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 sm:p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-50">
                <GraduationCap className="h-6 w-6 text-secondary-600" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-[#173042]">
                {t('company.languages.title')}
              </h3>
              <p className="mt-3 text-sm text-text">{t('company.languages.description')}</p>
              <Link
                to="/courses"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:text-primary-600"
              >
                {t('company.languages.cta')}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function TrainingSection() {
    const professionalCourses = [
      {
        title: 'Marketing & communication',
        description:
          'Construisez une stratégie de marque, attirez vos clients et communiquez avec impact.',
        icon: Presentation,
        color: 'bg-[#edf7fb] text-primary-600',
      },
      {
        title: 'Techniques de vente',
        description:
          'Maîtrisez l’accueil, la négociation, la prospection et la fidélisation client.',
        icon: BriefcaseBusiness,
        color: 'bg-[#fff4e7] text-secondary-600',
      },
      {
        title: 'Infographie',
        description:
          'Développez vos compétences créatives pour concevoir des visuels modernes et professionnels.',
        icon: Palette,
        color: 'bg-[#f5f1ff] text-[#7d55c7]',
      },
      {
        title: 'Montage de projets',
        description:
          'Transformez une idée en projet structuré, convaincant et prêt à être présenté.',
        icon: FileCheck2,
        color: 'bg-[#eef8ef] text-[#36834a]',
      },
    ];

    return (
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[.18em] text-primary-600">
              Nos formations
            </span>
            <h2 className="mt-3 font-display text-4xl text-[#173042] sm:text-5xl">
              Apprendre aujourd’hui, avancer demain.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-text">
              En présentiel à Yaoundé ou en ligne, nos programmes sont pensés pour vous donner des
              compétences immédiatement utiles.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <article className="overflow-hidden rounded-[2rem] bg-[#087fbd] p-7 text-white sm:p-10">
              <div className="flex items-center gap-3 text-[#ffcb1e]">
                <Languages className="h-6 w-6" />
                <span className="text-xs font-bold uppercase tracking-[.18em]">Pôle langues</span>
              </div>
              <h3 className="mt-5 font-display text-3xl text-white sm:text-4xl">
                Français, anglais et allemand — du A1 au C2.
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-white/75">
                Débutez, consolidez vos acquis ou atteignez un niveau avancé. Chaque niveau est
                validé avant le passage au suivant, avec un suivi individualisé.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                {[
                  'Français',
                  'Anglais',
                  'Allemand',
                  'Cours en ligne',
                  'Présentiel',
                  'Évaluations',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/15 bg-white/10 px-3 py-3"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link
                to="/courses"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[#ffcb1e] hover:text-white"
              >
                Voir les cours de langues <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {professionalCourses.map(({ title, description, icon: Icon, color }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-[#e8e8e3] p-6 transition-transform hover:-translate-y-1"
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[#173042]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  function MobilitySection() {
    const services = [
      'Bourses d’études en Chine',
      'Résidence permanente au Canada',
      'Études en Turquie',
      'Orientation sur votre destination',
      'Constitution et suivi de dossier',
      'Préparation au départ',
    ];
    return (
      <section className="overflow-hidden bg-[#f6f8f6] py-14 sm:py-20">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-48 w-48 rounded-[2.5rem] bg-[#ffcb1e]" />
            <img
              src="/images/hero-travel.jpeg"
              alt="Voyage et mobilité internationale"
              className="relative h-[330px] w-full rounded-[2.5rem] object-cover shadow-xl sm:h-[420px]"
            />
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-white p-4 shadow-lg sm:right-6">
              <Globe2 className="h-6 w-6 text-primary-600" />
              <p className="mt-2 text-sm font-bold text-[#173042]">
                Votre projet à l’international
              </p>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[.18em] text-secondary-600">
              Voyage & mobilité
            </span>
            <h2 className="mt-3 font-display text-4xl text-[#173042] sm:text-5xl">
              Un accompagnement clair pour partir plus serein.
            </h2>
            <p className="mt-5 leading-7 text-text">
              Nous vous orientons selon votre projet d’études, de voyage ou d’installation. Notre
              équipe vous aide à comprendre les étapes, préparer votre dossier et faire les bons
              choix.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-sm font-medium text-[#29404d]"
                >
                  <span className="mt-0.5 rounded-full bg-[#ffcb1e] p-1">
                    <Check className="h-3 w-3" />
                  </span>
                  {service}
                </li>
              ))}
            </ul>
            <Button
              to="/travel"
              variant="primary"
              size="md"
              className="mt-8 rounded-full bg-[#ffcb1e] px-6 !text-[#102936] hover:bg-[#f4bb05]"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Parler de mon projet
            </Button>
          </div>
        </div>
      </section>
    );
  }

  function LocationSection() {
    return (
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-[2rem] bg-[#edf7fb] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-sm">
                <MapPin className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-3xl text-[#173042] sm:text-4xl">
                Retrouvez-nous à Yaoundé.
              </h2>
              <p className="mt-3 leading-7 text-text">
                God Favor Solution Sarl est situé à{' '}
                <strong className="text-[#173042]">
                  Etoug-Ebe, Parlement Eto&apos;o, Yaoundé, Cameroun
                </strong>
                . Venez échanger avec notre équipe pour votre formation ou votre projet de mobilité.
              </p>
            </div>
            <Button
              to="/contact"
              variant="outline"
              size="md"
              className="mt-7 shrink-0 rounded-full border-[#173042] px-6 !text-[#173042] hover:bg-white lg:mt-0"
            >
              Voir nos coordonnées
            </Button>
          </div>
        </div>
      </section>
    );
  }

  function GuideAndBlogSection() {
    return (
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2">
          <div className="rounded-3xl bg-[#edf7fb] p-8 sm:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-sm">
              <Compass className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <h2 className="mt-4 text-xl font-semibold text-text-h">{t('guide.title')}</h2>
            <p className="mt-3 max-w-md text-sm text-text">{t('guide.subtitle')}</p>
            <Link
              to="/guide"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:text-primary-600"
            >
              {t('guide.cta')}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="rounded-3xl bg-[#fff4e7] p-8 sm:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-secondary-600 shadow-sm">
              <Newspaper className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <h2 className="mt-4 text-xl font-semibold text-text-h">{t('blog.title')}</h2>
            <p className="mt-3 text-sm text-text">{t('blog.subtitle')}</p>
            <Link
              to="/blog"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:text-primary-600"
            >
              {t('blog.cta')}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  function CtaBanner() {
    return (
      <section className="bg-[#087fbd]">
        <div className="container mx-auto flex flex-col items-stretch gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-16">
          <div>
            <h2 className="font-display text-2xl text-white">{t('cta.title')}</h2>
            <p className="mt-2 text-white/85">{t('cta.subtitle')}</p>
          </div>
          <Button
            to="/register"
            variant="secondary"
            size="md"
            className="shrink-0 whitespace-nowrap rounded-full bg-[#ffcb1e] !text-[#102936] hover:bg-[#f4bb05] sm:self-auto"
          >
            {t('cta.register')}
          </Button>
        </div>
      </section>
    );
  }
}
