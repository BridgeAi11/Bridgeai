import { ArrowRight } from "lucide-react";

/* ---------- Primary Button ---------- */

export function PrimaryButton({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-500 px-6 py-3 text-white font-semibold shadow-lg transition duration-300 hover:scale-105 ${className}`}
      {...props}
    >
      {children}

      <ArrowRight
        size={18}
        className="transition group-hover:translate-x-1"
      />
    </button>
  );
}

/* ---------- Secondary Button ---------- */

export function SecondaryButton({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-violet-600 hover:text-violet-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

/* ---------- Section Heading ---------- */

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">

      <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
        {title}

        {highlight && (
          <span className="text-violet-700">
            {" "}
            {highlight}
          </span>
        )}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>

    </div>
  );
}

/* ---------- Glass Card ---------- */

export function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}