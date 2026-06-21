import { sourcesData } from '../data/sources'
import { allPhotos } from '../data/photos'

const typeLabels: Record<string, string> = {
  article: 'Article',
  official: 'Official',
  book: 'Book',
  documentary: 'Documentary',
  database: 'Database',
}

const typeColors: Record<string, string> = {
  article: 'bg-accent/10 text-accent border-accent/20',
  official: 'bg-accent2/10 text-accent2 border-accent2/20',
  book: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  documentary: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  database: 'bg-gold/10 text-gold border-gold/20',
}

export default function Sources() {
  return (
    <section id="sources" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 reveal">
          <div className="accent-line mb-4" />
          <h2 className="section-heading">Sources</h2>
          <p className="section-subheading">
            All facts, statistics, and biographical information cited from primary and authoritative secondary sources.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="glass rounded-xl p-4 mb-10 reveal">
          <p className="text-sm text-muted leading-relaxed">
            <span className="text-textPrimary font-semibold">Academic Note:</span> This biography is a portfolio project for educational purposes. All statistical data was accurate as of mid-2024. No copyrighted images are used. All visual design elements are original CSS. Where sources are paywalled or require subscription, free summaries and official records have been used as the primary reference.
          </p>
        </div>

        {/* Sources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sourcesData.map((source, index) => (
            <div
              key={source.id}
              className="card-base hover:border-white/10 transition-all duration-200 reveal group"
              style={{ transitionDelay: `${index * 0.03}s` }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className={`text-xs px-2 py-0.5 rounded-md border font-medium flex-shrink-0 ${typeColors[source.type]}`}>
                  {typeLabels[source.type]}
                </div>
                {source.year && (
                  <span className="text-xs text-muted">{source.year}</span>
                )}
              </div>

              <h4 className="text-sm font-semibold text-textPrimary mb-1 leading-tight group-hover:text-accent transition-colors">
                {source.title}
              </h4>

              <p className="text-xs text-muted mb-3">{source.publisher}</p>

              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:text-accent/80 transition-colors underline underline-offset-2 break-all"
              >
                {source.url}
              </a>
            </div>
          ))}
        </div>

        {/* Photo Credits */}
        <div className="mt-12 reveal">
          <h3 className="text-lg font-bold text-textPrimary mb-4">Photo Credits</h3>
          <p className="text-sm text-muted mb-6">
            All photographs are sourced from{' '}
            <a href="https://commons.wikimedia.org" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
              Wikimedia Commons
            </a>{' '}
            under Creative Commons licenses. Attribution below is required by each license.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allPhotos.map((photo) => (
              <div key={photo.url} className="card-base text-sm">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-32 object-cover rounded-lg mb-3 object-top"
                />
                <p className="text-textPrimary font-medium text-xs leading-snug mb-1">{photo.caption}</p>
                <p className="text-muted text-xs mb-1">© {photo.author}</p>
                <a
                  href={photo.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent underline underline-offset-2"
                >
                  {photo.license}
                </a>
                <span className="text-muted text-xs"> · </span>
                <a
                  href={photo.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent/70 underline underline-offset-2"
                >
                  Source
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Credits */}
        <div className="mt-16 pt-16 border-t border-white/5 reveal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-black text-textPrimary mb-2">About This Project</h3>
              <p className="text-muted text-sm max-w-lg leading-relaxed">
                This website was built as a GitHub portfolio project to demonstrate proficiency in React, TypeScript, Vite, and Tailwind CSS. All design decisions — typography, colour system, layout — were made from scratch with no templates or UI component libraries.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 text-center min-w-[220px]">
              <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center font-black text-white text-xl">
                W
              </div>
              <p className="text-textPrimary font-bold">Wei Wu</p>
              <p className="text-muted text-sm">NYU Mathematics &amp; Economics</p>
              <p className="text-muted text-xs mt-1">ww2596@nyu.edu</p>
              <div className="mt-3 pt-3 border-t border-white/5">
                <p className="text-xs text-muted">Built with ❤️ and lots of coffee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
