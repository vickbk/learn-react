import { ALGOLIA_URL } from "@/app/scripts";
import type { ALGOLIA_STORY } from "@/app/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export function useInitialLoading() {
  return useQuery<ALGOLIA_STORY[]>({
    queryKey: [],
    queryFn: async () => {
      const {
        data: { hits },
      } = await axios(`${ALGOLIA_URL}?query=react`);
      return hits;
    },
    initialData: [],
  });
}
