import { CategoryHolder } from "@/shared/common-layout/components/category-holder";
import { ChangeTopic } from "./change-topic";
import { EffectFirstLoad } from "./effect-first-load";

export const EffectFetching = () => {
  return (
    <CategoryHolder title="Direct fetching with effect">
      <ChangeTopic />
      <EffectFirstLoad />
    </CategoryHolder>
  );
};
