import { TopicViewer } from "@/features/common-elements/components/topic-viewer";
import { ComponentsHolder } from "@/shared/common-layout/components/components-holder";
import { useInitialLoading } from "../hooks";

export const InitialLoading = () => {
  const { data, isLoading } = useInitialLoading();
  return (
    <ComponentsHolder title="Initial loading with React Query">
      <TopicViewer data={data} isLoading={isLoading} />
    </ComponentsHolder>
  );
};
