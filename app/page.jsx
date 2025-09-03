export default function Page() {
    return (
      <main className="min-h-screen bg-black text-zinc-50">
        {/* Container */}
        <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-16 pb-24">
          {/* HERO LINE */}
          <h1 className="tracking-tight leading-none font-[800] text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[8vw] select-none mb-6">
            <span className="text-zinc-20">Sophia Nguyen</span>{' '}
          </h1>
          <h2 className="tracking-tight leading-none font-[800] text-[4vw] sm:text-[4vw] md:text-[4vw] lg:text-[2vw] select-none">
          <span className="text-zinc-20">Build with curiosity, ship with impact.</span>
          </h2>
  
          {/* Lower grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left meta */}
            <div className="md:col-span-7 lg:col-span-8">
  
              <nav className="mt-6 flex flex-col space-y-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-zinc-100 underline decoration-zinc-500 hover:text-zinc-300 w-max"
                >
                  View resume
                </a>
                <a
                  href="https://github.com/sophian3105"
                  className="font-mono text-sm text-zinc-100 underline decoration-zinc-500 hover:text-zinc-300 w-max"
                >
                  View portfolio
                </a>
              </nav>
  
              <div className="mt-10 flex items-center gap-4 text-zinc-400">
                <a className="font-mono text-xs hover:text-zinc-200" href="https://github.com/sophian3105">GH</a>
                <a className="font-mono text-xs hover:text-zinc-200" href="https://www.instagram.com/sophia.nguyen31/">IG</a>
                <a className="font-mono text-xs hover:text-zinc-200" href="https://www.linkedin.com/in/sophia-nguyen">LI</a>
                <a className="font-mono text-xs hover:text-zinc-200" href="mailto:sophian3105@gmail.com">EMAIL</a>
              </div>
            </div>
  
            {/* Right list */}
            <aside className="md:col-span-5 lg:col-span-4 md:justify-self-end">
              <ul className="font-mono text-xs text-zinc-200 tracking-widest">
                {[
                  { label: 'Projects', href: '#' },
                  { label: 'Experience', href: '#' },
                  { label: 'About', href: '#' },
                  { label: 'Contact', href: '#' },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-mono text-sm underline decoration-zinc-500 text-zinc-100 hover:text-zinc-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
  
              <div className="mt-8 flex items-center gap-4 text-zinc-400">
                <button className="font-mono text-xs">EN</button>
                <button className="font-mono text-xs">中</button>
                <button className="font-mono text-xs">日</button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    );
  }
  