import ProjectCard from "components/ProjectCard";
import ExperienceCard from "components/ExperienceCard";


export default function Page() {
  return (
    <main className="bg-black text-zinc-50 snap-y snap-mandatory overflow-y-auto">
      <section className="snap-start min-h-[100svh] flex items-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 w-full">
          <h1 className="tracking-tight leading-none font-[800] text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[8vw] select-none mb-6">
            <span className="text-zinc-20">Sophia Nguyen</span>
          </h1>
          <h2 className="tracking-tight leading-none font-[800] text-[4vw] sm:text-[4vw] md:text-[4vw] lg:text-[2vw] select-none">
            <span className="text-zinc-20">Build with curiosity, ship with impact.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-7 lg:col-span-8">
              <nav className="mt-9 flex flex-col space-y-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-zinc-100 underline decoration-zinc-500 hover:text-zinc-300 w-max"
                >
                  View resume
                </a>
                <a
                  href="#projects"
                  className="font-mono text-sm text-zinc-100 underline decoration-zinc-500 hover:text-zinc-300 w-max"
                >
                  View portfolio
                </a>
              </nav>

              <div className="fixed bottom-6 flex items-center gap-4 text-zinc-400">
                <a className="font-mono text-xs hover:text-zinc-200" href="https://github.com/sophian3105">GH</a>
                <a className="font-mono text-xs hover:text-zinc-200" href="https://www.instagram.com/sophia.nguyen31/">IG</a>
                <a className="font-mono text-xs hover:text-zinc-200" href="https://www.linkedin.com/in/sophia-nguyen">LI</a>
                <a className="font-mono text-xs hover:text-zinc-200" href="mailto:sophian3105@gmail.com">EMAIL</a>
              </div>
            </div>

            <aside className="md:col-span-5 lg:col-span-4 md:justify-self-end">
              <ul className="font-mono text-xs text-zinc-200 tracking-widest space-y-1">
                {[
                  { label: 'Projects', href: '#projects' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
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
      </section>

        <section id="projects" className="snap-start mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ProjectCard title="RehabPal" image="/projects/rehabpal.jpg" href="https://github.com/raphaelpalacio/rehab-application" />
            <ProjectCard title="Steersafe" image="/images/Steersafe.png" href="https://github.com/joonhoswe/SteerSafe" />
            <ProjectCard title="ARIA" image="/images/ARIA.png" href="https://github.com/sophian3105/ARKit" />
            <ProjectCard title="BiteBudget" image="/images/BiteBudget.png" href="https://github.com/joonhoswe/bitebudget" />
            </div>
        </section>

        <section id="experience" className="snap-start mx-auto max-w-7xl px-6sm:px-40 py-40 sm:py-40">
                <h2 className="text-4xl font-semibold text-zinc-100">Experiences</h2>
                <ul className="mt-6 divide-y divide-zinc-800/80">
                <ExperienceCard
                    company="Faire"
                    date="Sept 2025 - Dec 2025"
                    title="iOS Intern"
                    location="Toronto, ON"
                    logo="/images/Faire.png"
                />
                <ExperienceCard
                    company="Ford Motor Company"
                    date="Jan 2025 - Apr 2025"
                    title="Android HMI Intern"
                    location="Waterloo, ON"
                    logo="/images/ford.jpeg"
                />
                <ExperienceCard
                    company="Creospark Consulting"
                    date="May 2024 - Aug 2024"
                    title="Technology Consultant"
                    location="Toronto, ON"
                    logo="/images/creospark.png"
                />
                <ExperienceCard
                    company="Explorer Hop"
                    date="May 2022 - Aug 2023"
                    title="Content Developer"
                    location="Toronto, ON"
                    logo="/images/explorer.png"
                />
                <ExperienceCard
                    company="Youth Culture"
                    date="Mar 2023 - Apr 2023"
                    title="Technology Consultant"
                    location="Project Intern"
                    logo="/images/youth.jpeg"
                />
                <ExperienceCard
                    company="York University"
                    date="June 2022 - July 2022"
                    title="Laboratory Research Assistant"
                    location="Toronto, ON"
                    logo="/images/york.png"
                />
                </ul>
        </section>
    </main>
  );
}