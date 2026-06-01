export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          OSINT &amp; Data Enrichment
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Extract Contact Info from<br />
          <span className="text-[#58a6ff]">LinkedIn Profiles</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste LinkedIn URLs and get verified emails and phone numbers in seconds. Powered by multiple OSINT APIs with confidence scores and source attribution.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Extracting — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "500 profile lookups/month",
              "Email + phone extraction",
              "Confidence scores & source tags",
              "Batch CSV upload",
              "API access included",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">How does the contact extraction work?</h3>
            <p className="text-[#8b949e] text-sm">We cross-reference LinkedIn profile data against multiple OSINT databases and enrichment APIs (Hunter.io, Clearbit, Snov.io, and others) to surface verified emails and phone numbers with confidence scores.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">Is this legal and compliant?</h3>
            <p className="text-[#8b949e] text-sm">We only surface publicly available contact information from legitimate data sources. Users are responsible for complying with GDPR, CAN-SPAM, and applicable local laws when using extracted contact data.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">What if I need more than 500 lookups?</h3>
            <p className="text-[#8b949e] text-sm">Reach out via the support email after subscribing and we can arrange a custom volume plan tailored to your team's needs.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} LinkedIn Recruiter Contact Extractor. All rights reserved.
      </footer>
    </main>
  );
}
