import { ComponentsHolder } from "@/shared/common-layout/components/components-holder";
import { useFirstLoad } from "../hooks";

export const EffectFirstLoad = () => {
  const data = useFirstLoad();
  return (
    <ComponentsHolder title="Direct fetching with effect on first load">
      <ul className="list-disc pl-5">
        {data.map((story) => (
          <li key={story.objectID}>
            <a href={story.url} className="text-blue-500 hover:underline">
              {story.title}
            </a>
          </li>
        ))}
      </ul>
    </ComponentsHolder>
  );
};
