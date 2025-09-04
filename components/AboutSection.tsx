import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900/50 ring-1 ring-white/10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_-10%_-10%,#ffffff14,transparent_40%)]" />
                <Image
                src="/images/sophia.jpeg"          
                alt="Sophia Nguyen"
                width={1400}
                height={1000}
                className="w-full h-auto object-cover"
                priority
                />
            </div>
        </div>

        <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-100">
                About me
            </h2>

            <div className="mt-6 space-y-4 text-zinc-300 leading-relaxed">
                <p>
                Hi! I’m <span className="font-medium text-zinc-100">Sophia Nguyen</span>,
                a <em>Computer Science</em> student at the University of Waterloo. I love
                building human-centered software and shipping things that matter.
                </p>
                <p>
                Recently I’ve been focused on iOS and full-stack projects—mixing{" "}
                <em>Swift/SwiftUI, React/Next.js,</em> and a dash of AI.
                Outside code, I am probably training for an IronMan or travelling to my next hackathon.
                </p>
                <p>Thanks for checking out my projects and portfolio :)</p>
                <a href="mailto:sophian3105@gmail.com" className="no-underline inline-block rounded-full bg-zinc-100 px-6 py-3 font-mono text-sm font-medium text-black hover:bg-zinc-200 transition">
                    Contact Me
                </a>
          </div>
        </div>
      </div>
    </section>
  );
}