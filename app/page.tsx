export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Health Tracking for Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Prevent developer back pain<br />
          <span className="text-[#58a6ff]">with smart breaks</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          PostureTrack uses your webcam and TensorFlow.js to analyze your posture in real time, remind you to take breaks, and give personalized ergonomic desk setup tips — all processed locally for full privacy.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $8 / month
        </a>
        <p className="mt-4 text-xs text-[#8b949e]">Cancel anytime. No data leaves your device.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📷', title: 'Posture Analysis', desc: 'Webcam-based real-time posture scoring using TensorFlow.js PoseNet — runs entirely in your browser.' },
            { icon: '⏱️', title: 'Smart Break Reminders', desc: 'Tracks your coding sessions and nudges you at the right moment based on your posture and focus time.' },
            { icon: '🪑', title: 'Ergonomic Tips', desc: 'Personalized desk setup recommendations based on your detected posture patterns over time.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$8</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Real-time posture analysis',
              'Smart break notifications',
              'Ergonomic recommendations',
              'Session history (local storage)',
              'Works offline — no cloud required',
              'Cancel anytime'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Does PostureTrack send my camera feed to a server?',
              a: 'No. All posture analysis runs locally in your browser using TensorFlow.js. Your video feed never leaves your device.'
            },
            {
              q: 'What equipment do I need?',
              a: 'Just a webcam (built-in or external) and a modern browser like Chrome or Firefox. No special hardware required.'
            },
            {
              q: 'Can my employer use this for a team?',
              a: 'Yes. Each developer gets their own subscription. Team billing and volume discounts are available — contact us for details.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} PostureTrack. Built for developers who care about their health.
      </footer>
    </main>
  )
}
