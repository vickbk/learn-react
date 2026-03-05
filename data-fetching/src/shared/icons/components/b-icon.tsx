import type { BIClassname } from "../types";

export const BIcon = <C extends string>({
  className,
}: {
  className: BIClassname<C>;
}) => {
  return <i className={`bi bi-${className}`}></i>;
};
