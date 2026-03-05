import type { TypesHolderProps } from "../types";

export const ComponentsHolder = ({ title, children }: TypesHolderProps) => {
  return (
    <article className="p-4">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex gap-2 flex-wrap">{children}</div>
    </article>
  );
};
