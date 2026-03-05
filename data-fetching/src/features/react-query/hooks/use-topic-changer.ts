import { ALGOLIA_URL } from "@/app/scripts";
import type { ALGOLIA_STORY } from "@/app/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useActionState } from "react";

export function useTopicChanger() {
  const [topic, formAction] = useActionState(
    async (_: unknown, data: FormData) => {
      return data.get("topic") as string;
    },
    null,
  );

  const reactQ = useQuery<ALGOLIA_STORY[]>({
    queryKey: [topic],
    queryFn: async () => {
      if (!topic) return [];
      const responce = await axios(`${ALGOLIA_URL}?query=${topic}`);
      return responce.data.hits;
    },
    initialData: [],
  });
  return { ...reactQ, formAction, topic };
}
