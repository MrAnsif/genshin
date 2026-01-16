'use client'

import Link from 'next/link'

export default function EventsPage() {
  return (
    <main className="min-h-[100dvh] w-full flex bg-black text-white">

      {/* MAIN EVENTS */}
      <div className="w-1/2 flex items-center justify-center border-r border-white/10">
        <div className="text-center space-y-6">

          <h2 className="text-5xl font-semibold tracking-tight">
            Main Events
          </h2>

          <p className="text-yellow-400/80 max-w-sm mx-auto">
            Flagship events, competitions and keynote sessions
          </p>

          <Link href="/events/main">
            <button
              className="
                mt-4
                px-10 py-3 rounded-full
                border border-white/30
                font-medium
                transition-all duration-300
                hover:-translate-y-2
                hover:scale-105
                hover:border-yellow-400
                hover:text-yellow-400
                hover:shadow-[0_0_40px_rgba(255,200,0,0.5)]
                active:scale-95
              "
            >
              Explore →
            </button>
          </Link>

        </div>
      </div>

      {/* DEPARTMENT EVENTS */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center space-y-6">

          <h2 className="text-5xl font-semibold tracking-tight">
            Department Events
          </h2>

          <p className="text-yellow-400/80 max-w-sm mx-auto">
            Explore events organized by individual departments
          </p>

          <Link href="/events/dept">
            <button
              className="
                mt-4
                px-10 py-3 rounded-full
                border border-white/30
                font-medium
                transition-all duration-300
                hover:-translate-y-2
                hover:scale-105
                hover:border-yellow-400
                hover:text-yellow-400
                hover:shadow-[0_0_40px_rgba(255,200,0,0.5)]
                active:scale-95
              "
            >
              Choose Department →
            </button>
          </Link>

        </div>
      </div>

    </main>
  )
}
