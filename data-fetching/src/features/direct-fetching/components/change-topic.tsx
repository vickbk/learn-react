import { ComponentsHolder } from "@/shared/common-layout/components/components-holder";
import { TopicViewer } from "./topic-viewer";

export const ChangeTopic = () => {
  return (
    <ComponentsHolder title="Change topic and fetch data">
      <form className="space-x-2">
        <label>
          Topic:
          <input type="text" name="topic" placeholder="ex. react" />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Fetch
        </button>
      </form>
      <TopicViewer data={[]} isLoading={false} />
    </ComponentsHolder>
  );
};
