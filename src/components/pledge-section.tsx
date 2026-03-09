import { pledges } from "@/data/pledges";
import PledgeCard from "./pledge-card";

export default function PledgeSection() {
  return (
    <section
      id="pledges"
      className="bg-gray-50 py-20 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
          주요 공약
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pledges.map((pledge) => (
            <PledgeCard key={pledge.id} {...pledge} />
          ))}
        </div>
      </div>
    </section>
  );
}
