import { TopicChanger } from "@/features/common-elements/components/topic-changer";
import { TopicViewer } from "@/features/common-elements/components/topic-viewer";
import { ComponentsHolder } from "@/shared/common-layout/components/components-holder";
import { useChangeTopic } from "../hooks";

export const ChangeTopic = () => {
  const [data, isLoading, formAction, topic] = useChangeTopic();
  return (
    <ComponentsHolder title="Change topic and fetch data">
      <TopicChanger
        formAction={formAction}
        isLoading={isLoading}
        topic={topic}
      />
      <TopicViewer data={data} isLoading={isLoading} />
    </ComponentsHolder>
  );
};
