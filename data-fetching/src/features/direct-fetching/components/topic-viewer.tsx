import { BIcon } from "@/shared/icons/components/b-icon";
import type { ALGOLIA_STORY } from "../types/first-load-types";

export const TopicViewer = ({
  data,
  isLoading,
}: {
  data: ALGOLIA_STORY[];
  isLoading: boolean;
}) => {
  return (
    <>
      {isLoading ? (
        <p>
          Loading <BIcon className="arrow-repeat animate-spin inline-block" />
        </p>
      ) : (
        <ul className="list-disc pl-5">
          {data.map((story) => (
            <li key={story.objectID}>
              <a href={story.url} className="text-blue-500 hover:underline">
                {story.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
