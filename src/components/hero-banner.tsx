import Image from "next/image";
import { candidate } from "@/data/candidate";

export default function HeroBanner() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl md:mx-0">
          <Image
            src={candidate.photo}
            alt={`${candidate.name} 후보 사진`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 384px"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="mb-2 text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400">
            {candidate.party}
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {candidate.name}
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl dark:text-gray-300">
            {candidate.slogan}
          </p>
          <a
            href="#pledges"
            className="inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            공약 보기
          </a>
        </div>
      </div>
    </section>
  );
}
