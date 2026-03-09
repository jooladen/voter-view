import type { Pledge } from "@/data/pledges";

export default function PledgeCard({ icon, category, title, description }: Pledge) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
      <div className="mb-4 text-4xl">{icon}</div>
      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
        {category}
      </span>
      <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </article>
  );
}
