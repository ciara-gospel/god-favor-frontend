import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, UserRound } from 'lucide-react';

export function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  const benefits = [
    'Cours de français, anglais et allemand — A1 à C2',
    'Ressources texte et vidéo accessibles en ligne',
    'Suivi de progression et évaluations par niveau',
    'Accompagnement personnalisé à Yaoundé ou à distance',
  ];
  return (
    <section className="min-h-[calc(100svh-80px)] bg-[#f6f8f6] px-4 py-12 sm:py-20">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#173042]/10 lg:grid-cols-[1.02fr_.98fr]">
        <div className="order-2 bg-[#edf7fb] p-8 sm:p-12 lg:order-1">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-primary-600">
            Inscription en ligne
          </p>
          <h1 className="mt-5 font-display text-4xl leading-tight text-[#173042]">
            Votre projet commence ici.
          </h1>
          <p className="mt-5 leading-7 text-text">
            Créez votre espace pour vous inscrire à un cours de langues ou être accompagné dans
            votre projet international.
          </p>
          <ul className="mt-9 space-y-4 text-sm font-medium text-[#29404d]">
            {benefits.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-text">
            Vous avez déjà un compte ?{' '}
            <Link to="/login" className="font-bold text-primary-700 hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
        <div className="order-1 p-7 sm:p-12 lg:order-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
            <UserRound className="h-5 w-5" />
          </div>
          <h2 className="mt-5 font-display text-3xl text-[#173042]">Créer mon compte</h2>
          {submitted && (
            <p
              role="status"
              className="mt-5 rounded-xl bg-[#eef8ef] px-4 py-3 text-sm text-[#286a39]"
            >
              Votre demande est bien enregistrée. Nous vous contacterons pour finaliser votre
              inscription.
            </p>
          )}
          <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="text-sm font-semibold text-[#173042]">
              Nom complet
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Votre nom"
                className="mt-2 w-full rounded-xl border border-[#dce3e3] px-4 py-3 font-normal outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
              />
            </label>
            <label className="text-sm font-semibold text-[#173042]">
              Téléphone
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+237 ..."
                className="mt-2 w-full rounded-xl border border-[#dce3e3] px-4 py-3 font-normal outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
              />
            </label>
            <label className="text-sm font-semibold text-[#173042] sm:col-span-2">
              Adresse e-mail
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="vous@exemple.com"
                className="mt-2 w-full rounded-xl border border-[#dce3e3] px-4 py-3 font-normal outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
              />
            </label>
            <label className="text-sm font-semibold text-[#173042]">
              Votre besoin
              <select
                required
                name="interest"
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-[#dce3e3] bg-white px-4 py-3 font-normal outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
              >
                <option value="" disabled>
                  Sélectionnez un service
                </option>
                <option>Cours de langues</option>
                <option>Formation professionnelle</option>
                <option>Études ou mobilité internationale</option>
                <option>Autre demande</option>
              </select>
            </label>
            <label className="text-sm font-semibold text-[#173042]">
              Mot de passe
              <input
                required
                minLength={8}
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="8 caractères minimum"
                className="mt-2 w-full rounded-xl border border-[#dce3e3] px-4 py-3 font-normal outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
              />
            </label>
            <label className="flex items-start gap-3 text-xs leading-5 text-text sm:col-span-2">
              <input required type="checkbox" className="mt-1 accent-primary-600" />
              J’accepte que God Favor Solution utilise ces informations pour traiter ma demande.
            </label>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#ffcb1e] px-5 py-3.5 font-bold text-[#102936] transition hover:bg-[#f4bb05] sm:col-span-2"
            >
              Créer mon compte <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
