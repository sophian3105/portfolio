import Image from "next/image";
import React from "react";

type Props = {
  company: string;
  date: string;
  title: string;
  location: string;
  logo?: string;
};

export default function ExperienceCard({ company, date, title, location, logo }: Props) {
  return (
    <li className="py-6">
      <div className="grid grid-cols-10 gap-6 items-center">
        <div className="col-span-3 text-lg text-zinc-400">
            <div>{date}</div>
            <div className="mt-1">{location}</div>
        </div>

        <div className="col-span-6 flex items-start gap-6">
            <span className="hidden sm:block w-50 pt-3">
                <span className="block h-px bg-zinc-700/80" />
            </span>

            <div>
                <div className="text-xl font-semibold text-zinc-100">{company}</div>
                <div className="text-sm text-zinc-400">{title}</div>
            </div>
        </div>

        <div className="col-span-1 justify-self-end">
            {logo && (
                <Image
                    src={logo}
                    alt={`${company} logo`}
                    width={55}
                    height={55}
                    className="rounded-md ring-1 ring-white/10"
                />
            )}
        </div>
      </div>
    </li>
  );
}