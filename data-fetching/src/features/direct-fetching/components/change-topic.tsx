import { ComponentsHolder } from "@/shared/common-layout/components/components-holder";
import { useChangeTopic } from "../hooks";
import { TopicViewer } from "./topic-viewer";

export const ChangeTopic = () => {
  const [data, isLoading, formAction, topic] = useChangeTopic();
  return (
    <ComponentsHolder title="Change topic and fetch data">
      <form action={formAction}>
        <fieldset
          className="space-x-2 flex flex-col gap-4"
          disabled={isLoading}
        >
          <label className="grid gap-4 w-full">
            Topic:
            <input
              className="py-1 px-2"
              type="text"
              name="topic"
              placeholder="ex. react"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 disabled:bg-blue-300 text-white px-4 py-1 rounded"
          >
            Fetch
          </button>
        </fieldset>
        {topic && <p>Current topic: {topic}</p>}
      </form>
      <TopicViewer data={data} isLoading={isLoading} />
    </ComponentsHolder>
  );
};
