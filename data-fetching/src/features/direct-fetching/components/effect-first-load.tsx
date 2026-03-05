import { TopicViewer } from "@/features/common-elements/components/topic-viewer";
import { ComponentsHolder } from "@/shared/common-layout/components/components-holder";
import { useFirstLoad } from "../hooks";

export const EffectFirstLoad = () => {
  const [data, isLoading] = useFirstLoad();

  return (
    <ComponentsHolder title="Direct fetching with effect on first load">
      <TopicViewer data={data} isLoading={isLoading} />
    </ComponentsHolder>
  );
};
