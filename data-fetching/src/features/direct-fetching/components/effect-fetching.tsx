import { CategoryHolder } from "@/shared/common-layout/components/category-holder";
import { EffectFirstLoad } from "./effect-first-load";

export const EffectFetching = () => {
  return (
    <CategoryHolder title="Direct fetching with effect">
      <EffectFirstLoad />
    </CategoryHolder>
  );
};
