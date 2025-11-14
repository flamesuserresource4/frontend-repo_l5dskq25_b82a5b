import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen w-full bg-blue-600 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto mb-10 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
          {/* Simple mark */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="currentColor" opacity="0.9"/>
            <path d="M7.5 9.5L12 12.5L16.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Tenda MKS</h1>
        <p className="mt-3 text-lg sm:text-xl text-white/90">A clean new experience is on the way.</p>
        <p className="mt-1 text-white/80">Coming Soon</p>

        <div className="mt-8">
          {submitted ? (
            <div className="rounded-lg bg-white/10 px-4 py-3 text-sm sm:text-base">Thanks! We'll let you know when we launch.</div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-md items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to get notified"
                className="w-full rounded-md border-0 bg-white text-gray-900 placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/80"
                required
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-white px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white/80 transition"
              >
                Notify me
              </button>
            </form>
          )}
        </div>

        <footer className="mt-12 text-xs text-white/70">
          © {new Date().getFullYear()} Tenda MKS. All rights reserved.
        </footer>
      </div>
    </main>
  )
}

export default App
