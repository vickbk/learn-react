import type { BIClassname } from "../types";

export const BIcon = ({ className }: { className: BIClassname }) => {
  return <i className={`bi bi-${className}`}></i>;
};
