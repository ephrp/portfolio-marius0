import Image from "next/image";

type Project = {
  title: string;
  badge?: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
  // optionnel
  image?: { src: string; alt: string };
  links?: { label: string; href: string }[];
};

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Création de contenu (TikTok & Instagram)",
      badge: "Projet phare",
      subtitle:
        "Création et publication régulière de contenus pour développer la visibilité, l’engagement et la présence de marque sur les réseaux sociaux.",
      bullets: [
        "Planification éditoriale (sujets, formats, calendrier)",
        "Production de contenus : scripts, visuels, montage court",
        "Optimisation : hooks, hashtags, CTA, cohérence de marque",
        "Analyse des performances (vues, engagement, clics) et itérations",
      ],
      tags: ["Content", "Reels", "TikTok", "Branding", "Performance"],
      image: {
        // mets une image de couverture dans /public/projects/content.jpg (ou .png)
        src: "/projects/creator.png",
        alt: "Aperçu création de contenu",
      },
      links: [
        // remplace par les vrais liens du client
        { label: "Instagram", href: "https://www.instagram.com/marius_mtl_content_creator?igsh=dGt5dGFmeXpqa2cx&utm_source=qr" },
        { label: "TikTok", href: "https://www.tiktok.com/@mariuslife06?_r=1&_t=ZN-93fgxaBQON4" },
      ],
    },

    {
      title: "Analyse ROI – Campagne numérique (GreenStyle)",
      badge: "Projet école",
      subtitle:
        "Étude de performance d’une campagne multi-canaux : social ads, search ads, influence et email, avec calcul du ROI et recommandations.",
      bullets: [
        "ROI calculé : 86,67% (revenu 84 000$ vs coût 45 000$)",
        "Analyse par canal via ROAS (social ads, search, influence, email)",
        "Recommandations : optimiser budget social, améliorer influence, renforcer email",
        "KPIs : engagement, conversion, rebond, ouverture/clic + retours qualitatifs",
      ],
      tags: ["ROI", "ROAS", "KPI", "GA4", "Recommandations"],
      image: {
        // mets une image dans /public/projects/roi.jpg (ou capture du PDF)
        src: "/projects/roi.jpg",
        alt: "Aperçu analyse ROI campagne",
      },
      // source: le PDF parle des canaux et des chiffres (ROI/ROAS/KPIs)
      // (tu peux aussi ajouter un lien vers le PDF si tu l’héberges dans /public)
      links: [{ label: "Voir le document", href: "/docs/roi-campagne.pdf" }],
    },

    {
  title: "Campagne Social Media – Librairie de Verdun",
  badge: "Projet école",
  subtitle:
    "Création et planification de contenus social media pour promouvoir les nouveautés et engager la communauté d’une librairie locale.",

  bullets: [
    "Rédaction de publications Facebook et Instagram présentant les nouveautés littéraires",
    "Conception d’un jeu concours pour augmenter l’engagement et la visibilité de la page",
    "Création de contenus Story et LinkedIn pour renforcer la présence digitale de la librairie",
    "Développement d’un storytelling autour de l’équipe et des nouvelles recrues"
  ],

  tags: ["Social Media", "Facebook", "Instagram", "Story", "Content creation"],

  image: {
    src: "/projects/librairie-campaign.jpg", // mets l'image du PDF que tu as
    alt: "Campagne social media librairie de Verdun"
  },

  links: [
    {
      label: "Voir le projet complet (PDF)",
      href: "/docs/Facebook.pdf"
    }
  ]
},


    {
  title: "Storyboard de campagne – “Fashion Mars”",
  badge: "Projet école",
  subtitle:
    "Conception d’un storyboard pour structurer une campagne de contenu : narration, séquences visuelles et cohérence de l’identité de marque.",

  bullets: [
    "Définition d’un déroulé narratif en 6 scènes (ouverture, identité, découverte, diversité des modèles, fusion des univers, look final)",
    "Sélection de visuels + cohérence esthétique (univers, couleurs, ambiance) pour guider la production de contenu",
    "Structuration d’un plan de publication / enchaînement des contenus pour réseaux sociaux",
    "Livrable final : storyboard prêt à présenter (support visuel de référence pour shooting / montage / posts)"
  ],

  tags: ["Storyboard", "Direction artistique", "Campaign content", "Branding", "Social Media"],

  image: {
    src: "/projects/fashion.jpg",
    alt: "Storyboard de campagne Fashion Mars"
  },

  links: [
    // si tu as un PDF plus tard, tu pourras l’ajouter ici
    { label: "Voir le rendu (image)", href: "/projects/fashion-mars-storyboard.jpeg" }
  ]
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
      src="/images/projects-bg.jpeg"
      alt="Background marketing digital"
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
        Projets & Réalisations
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Marketing numérique
      </h1>

      <p className="mt-4 text-gray-200">
        Sélection de réalisations concrètes : création de contenu, campagnes et projets académiques.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        
        <a
          href="/"
          className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium hover:bg-white/20"
        >
          Accueil
        </a>

        <a
          href="/skills"
          className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium hover:bg-white/20"
        >
          Compétences
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
          {projects.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              {p.image && (
                <div className="relative h-52 w-full">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    className="object-cover"
                    priority={p.badge === "Projet phare"}
                  />
                </div>
              )}

              <div className="p-8">
                {/* Title row */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold">{p.title}</h2>
                    <p className="mt-2 text-gray-600">{p.subtitle}</p>
                  </div>

                  {p.badge && (
                    <span className="shrink-0 rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Bullets */}
                <ul className="mt-6 space-y-2 text-gray-700">
                  {p.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-3 py-1 text-xs text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {p.links && p.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium underline"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-2xl border bg-white p-10 text-center shadow-sm">
          <h3 className="text-xl font-semibold">Disponible pour un stage</h3>
          <p className="mt-2 text-gray-600">
            Je peux détailler les livrables, la méthode et les résultats de chaque réalisation.
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
