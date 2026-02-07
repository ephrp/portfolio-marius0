import Image from "next/image";

export default function SkillsPage() {
  const skills = [
    {
      title: "Création de contenu",
      subtitle: "Copywriting, storytelling et contenus adaptés aux canaux.",
      emoji: "✍️",
      image: "/skills/content.jpeg",
      points: [
        "Copywriting (titres, appels à l’action)",
        "Bases du storytelling",
        "Contenu visuel (images, vidéos courtes)",
        "Adaptation du message selon le canal",
      ],
      tags: ["Copywriting", "Storytelling", "Visuels", "Brand tone"],
    },
    {
      title: "SEO (référencement naturel)",
      subtitle: "Optimiser la visibilité et la performance organique.",
      emoji: "🔎",
      image: "/skills/seo.jpg",
      points: [
        "Recherche de mots-clés",
        "Optimisation on-page (titres, balises, contenu)",
        "Notions de SEO technique (vitesse, mobile, indexation)",
        "Bases du netlinking",
      ],
      tags: ["Mots-clés", "On-page", "Technique", "Netlinking"],
    },
    {
      title: "Analyse de données",
      subtitle: "Décisions basées sur des KPI et tableaux de bord.",
      emoji: "📊",
      image: "/skills/analytics.png",
      points: [
        "Google Analytics / GA4",
        "Tableaux de bord",
        "KPI (CTR, taux de conversion, CAC, etc.)",
        "Prise de décision basée sur les données",
      ],
      tags: ["GA4", "KPI", "Dashboard", "Insights"],
    },
    {
      title: "Email marketing",
      subtitle: "Campagnes ciblées, automatisations et optimisation.",
      emoji: "✉️",
      image: "/skills/email.jpg",
      points: [
        "Segmentation des audiences",
        "Automatisation (funnels, scénarios)",
        "Rédaction d’emails efficaces",
        "Analyse des taux d’ouverture et de clic",
      ],
      tags: ["Segmentation", "Automation", "Funnels", "Performance"],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="relative overflow-hidden rounded-2xl shadow-sm">

  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/images/skill-bg.jpeg"
      alt="Background compétences marketing digital"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Overlay sombre */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative p-14">
    <div className="mx-auto max-w-3xl text-center text-white">

      <p className="text-sm font-medium uppercase tracking-widest text-gray-200">
        Compétences clés
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Marketing numérique
      </h1>

      <p className="mt-4 text-gray-200">
        Un aperçu clair des domaines que je maîtrise : contenu, visibilité,
        analyse et performance.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">

        <a
          href="/"
          className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium hover:bg-white/20"
        >
          Accueil
        </a>

        <a
          href="/projects"
          className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium hover:bg-white/20"
        >
          Projets
        </a>

        <a
          href="/contact"
          className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium hover:bg-white/20"
        >
          Contact
        </a>

      </div>

    </div>
  </div>

</header>


        {/* Grid */}
        <section className="mt-14 grid gap-8 md:grid-cols-2">
          {skills.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
            >
              {/* IMAGE (en haut de la carte) */}
              <div className="relative h-44 w-full border-b bg-gray-100">
  <Image
    src={s.image}
    alt={`Illustration - ${s.title}`}
    fill
    className="object-contain"
    priority={s.title === "Création de contenu"}
  />
</div>


              {/* Contenu */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      <span className="mr-2">{s.emoji}</span>
                      {s.title}
                    </h2>
                    <p className="mt-2 text-gray-600">{s.subtitle}</p>
                  </div>

                  <span className="shrink-0 rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                    Focus
                  </span>
                </div>

                <ul className="mt-6 space-y-2 text-gray-700">
                  {s.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-3 py-1 text-xs text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-2xl border bg-white p-10 text-center shadow-sm">
          <h3 className="text-xl font-semibold">Intéressé par mon profil ?</h3>
          <p className="mt-2 text-gray-600">
            Je suis à la recherche d’un stage en marketing numérique. Je peux
            détailler mes travaux et méthodes.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Me contacter
            </a>
            <a
              href="/cvmarius.pdf"
              target="_blank"
              rel="noopener noreferrer"
             className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Télécharger le CV
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

