import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    title: string;
    image: string;        
    href?: string;        
    tag?: string;        
    comingSoon?: boolean;
};

export default function ProjectCard({ title, image, href, tag, comingSoon }: Props) {    
    const Card = (
        <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40">
            <div className="relative aspect-[16/10] w-full">
                <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={false}
                />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0.1))]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
            <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow">
                {title}
            </h3>
        </div>
        {(tag || comingSoon) && (
            <div className="absolute right-4 top-4 flex gap-2">
                {tag && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/15">
                    {tag}
                    </span>
                )}
                {comingSoon && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/15">
                    Coming Soon
                    </span>
                )}
            </div>
        )}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -inset-24 bg-[radial-gradient(60rem_30rem_at_80%_-10%,#ffffff20,transparent_60%)]" />
        </div>
    </div>
    );
    return href ? (
        <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/60 rounded-3xl">
            {Card}
        </Link>
    ) : Card;
}