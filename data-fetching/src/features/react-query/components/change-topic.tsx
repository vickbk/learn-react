import { TopicChanger } from "@/features/common-elements/components/topic-changer";
import { TopicViewer } from "@/features/common-elements/components/topic-viewer";
import { ComponentsHolder } from "@/shared/common-layout/components/components-holder";
import { useTopicChanger } from "../hooks";

export const ChangeTopic = () => {
  const { data, ...formProps } = useTopicChanger();
  return (
    <ComponentsHolder title="Change topic with react query">
      <TopicChanger {...formProps} />
      <TopicViewer data={data} isLoading={formProps.isLoading} />
    </ComponentsHolder>
  );
};
