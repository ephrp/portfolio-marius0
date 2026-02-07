import Image from "next/image";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="relative overflow-hidden rounded-2xl shadow-sm">

  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/images/contact-bg.jpg"
      alt="Background contact marketing numérique"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Overlay sombre */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative p-14 text-center">

    <p className="text-sm font-medium uppercase tracking-widest text-gray-200">
      Contact
    </p>

    <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
      Discutons de votre prochain projet
    </h1>

    <p className="mx-auto mt-4 max-w-3xl text-gray-200">
      Étudiant diplômé en marketing numérique, actuellement à la recherche d’un stage.
      N’hésitez pas à me contacter — réponse rapide.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">

      <a
        href="/"
        className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20"
      >
        Accueil
      </a>

      <a
        href="/skills"
        className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20"
      >
        Compétences
      </a>

      <a
        href="/projects"
         className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20"
      >
        Projets
      </a>

    </div>

  </div>

</header>


        {/* Grid */}
        <section className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Email */}
          <article className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="mt-2 text-gray-600">
              Le moyen le plus simple pour me joindre.
            </p>

            <a
              href="mailto:latomarius0@gmail.com"
              className="mt-6 inline-block rounded-lg border bg-gray-50 px-4 py-2 font-medium underline decoration-gray-400 underline-offset-4 hover:bg-gray-100"
            >
              latomarius0@gmail.com
            </a>

            
          </article>

          {/* Téléphone */}
          <article className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">Téléphone</h2>
            <p className="mt-2 text-gray-600">
              Disponible pour un appel rapide si besoin.
            </p>

            <a
              href="tel:+15148989076"
              className="mt-6 inline-block rounded-lg border bg-gray-50 px-4 py-2 font-medium underline decoration-gray-400 underline-offset-4 hover:bg-gray-100"
            >
              +1 (514) 898-9076
            </a>

            
          </article>

          {/* LinkedIn */}
          <article className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">LinkedIn</h2>
            <p className="mt-2 text-gray-600">
              Parcours, expérience et réseau.
            </p>

            <a
              href="https://www.linkedin.com/in/ton-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg border bg-gray-50 px-4 py-2 font-medium underline decoration-gray-400 underline-offset-4 hover:bg-gray-100"
            >
              Voir le profil LinkedIn
            </a>

            
          </article>

          {/* Réseaux */}
          <article className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">Réseaux sociaux</h2>
            <p className="mt-2 text-gray-600">
              Mes créations de contenu (Instagram & TikTok).
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/marius_mtl_content_creator?igsh=dGt5dGFmeXpqa2cx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-gray-50 px-4 py-2 font-medium hover:bg-gray-100"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@mariuslife06?_r=1&_t=ZN-93fgxaBQON4"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-gray-50 px-4 py-2 font-medium hover:bg-gray-100"
              >
                TikTok
              </a>
            </div>

            
          </article>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-2xl border bg-white p-10 text-center shadow-sm">
          <h3 className="text-xl font-semibold">Disponible pour un stage</h3>
          <p className="mt-2 text-gray-600">
            Je peux partager mon CV, mes réalisations et détailler mes méthodes de travail.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:email@exemple.com"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Envoyer un email
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
