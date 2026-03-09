import Image from "next/image";
import { candidate } from "@/data/candidate";

export default function ProfileSection() {
  return (
    <section id="profile" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
          후보자 소개
        </h2>

        <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-xl shadow-lg">
            <Image
              src={candidate.profilePhoto}
              alt={`${candidate.name} 프로필 사진`}
              fill
              className="object-cover"
              sizes="280px"
            />
          </div>

          <div>
            <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
              {candidate.name}
            </h3>
            <p className="mb-6 text-blue-600 dark:text-blue-400">
              {candidate.party}
            </p>

            <ul className="space-y-3">
              {candidate.history.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
