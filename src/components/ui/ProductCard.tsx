import { Check } from "lucide-react";
import ImageCard from "./ImageCard";

type ProductCardProps = {
  name: string;
  description: string;
  image: string | null;
  features: string[];
  viewProductLabel: string;
};

export default function ProductCard({
  name,
  description,
  image,
  features,
  viewProductLabel,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-charcoal-900/5">
      <ImageCard
        src={image}
        alt={name}
        placeholderLabel={`Add product photo for ${name}`}
        className="aspect-[4/3] w-full rounded-none"
      />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-xl font-semibold text-foreground">{name}</h3>
        <p className="text-sm leading-relaxed text-foreground-secondary">{description}</p>
        <ul className="flex flex-1 flex-col gap-2 pt-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-foreground">
              <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
        >
          {viewProductLabel}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
