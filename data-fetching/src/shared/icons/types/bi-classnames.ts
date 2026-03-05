export type BIClassname<S extends string = string> = S extends
  | `bi ${string}`
  | `bi-${string}`
  ? never
  : S;
