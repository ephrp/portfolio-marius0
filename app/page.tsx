export default function HomePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/seo-bg.jpg')",
        }}
      />

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenu */}
      <div className="relative z-10 max-w-3xl text-center text-white px-6">

        {/* Nom */}
        <h1 className="text-5xl font-bold">
          Marius L'taw LATO
        </h1>

        {/* Titre */}
        <p className="mt-4 text-xl text-gray-200">
          Diplômé en marketing numérique • À la recherche d’un stage
        </p>

        {/* Description */}
        <p className="mt-6 text-gray-300 leading-relaxed">
          Passionné par le marketing digital, le SEO et l’analyse de données,
          je souhaite mettre en pratique mes compétences dans un environnement professionnel.
          Je m’intéresse particulièrement à l’optimisation des performances,
          la stratégie numérique et l’analyse du comportement utilisateur.
        </p>

        {/* Boutons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="/projects"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-gray-200"
          >
            Voir mes projets
          </a>

          <a
            href="/skills"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-gray-200"
          >
            Compétences
          </a>

          <a
            href="/contact"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-gray-200"
          >
            Contact
          </a>

          <a
             href="/cvmarius.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-gray-200"
              
          >
            Télécharger mon CV
          </a>

        </div>

      </div>

    </main>
  );
}
