import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LockKeyhole, Mail } from 'lucide-react';

export function LoginPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <section className="min-h-[calc(100svh-80px)] bg-[#f6f8f6] px-4 py-12 sm:py-20">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#173042]/10 lg:grid-cols-[.9fr_1.1fr]">
        <aside className="bg-[#087fbd] p-8 text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#ffcb1e]">
            Espace apprenant
          </p>
          <h1 className="mt-5 font-display text-4xl leading-tight text-white">
            Continuez votre parcours.
          </h1>
          <p className="mt-5 leading-7 text-white/75">
            Accédez à vos cours, ressources vidéo, évaluations et à votre progression de A1 à C2.
          </p>
          <div className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm text-white/85">
            Pas encore de compte ?<br />
            <Link
              to="/register"
              className="mt-2 inline-flex items-center gap-2 font-bold text-[#ffcb1e] hover:text-white"
            >
              Créer mon compte <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
        <div className="p-7 sm:p-12">
          <h2 className="font-display text-3xl text-[#173042]">Connexion</h2>
          <p className="mt-2 text-sm leading-6 text-text">
            Renseignez vos identifiants pour accéder à votre espace.
          </p>
          {submitted && (
            <p
              role="status"
              className="mt-5 rounded-xl bg-[#eef8ef] px-4 py-3 text-sm text-[#286a39]"
            >
              Connexion enregistrée. L’authentification sera activée dès que le backend sera
              connecté.
            </p>
          )}
          <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
            <label className="block text-sm font-semibold text-[#173042]">
              Adresse e-mail
              <div className="relative mt-2">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-600" />
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="vous@exemple.com"
                  className="w-full rounded-xl border border-[#dce3e3] py-3 pl-11 pr-4 outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
                />
              </div>
            </label>
            <label className="block text-sm font-semibold text-[#173042]">
              Mot de passe
              <div className="relative mt-2">
                <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-600" />
                <input
                  required
                  minLength={8}
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Votre mot de passe"
                  className="w-full rounded-xl border border-[#dce3e3] py-3 pl-11 pr-4 outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
                />
              </div>
            </label>
            <div className="flex justify-end">
              <a
                href="#forgot-password"
                className="text-sm font-semibold text-primary-700 hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ffcb1e] px-5 py-3.5 font-bold text-[#102936] transition hover:bg-[#f4bb05]"
            >
              Se connecter <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
