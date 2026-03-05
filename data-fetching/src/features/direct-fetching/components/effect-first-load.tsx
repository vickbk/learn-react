import { ComponentsHolder } from "@/shared/common-layout/components/components-holder";
import { BIcon } from "@/shared/icons/components/b-icon";
import { useFirstLoad } from "../hooks";

export const EffectFirstLoad = () => {
  const [data, isLoading] = useFirstLoad();

  return (
    <ComponentsHolder title="Direct fetching with effect on first load">
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
    </ComponentsHolder>
  );
};
