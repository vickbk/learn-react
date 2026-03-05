import { ALGOLIA_URL } from "@/app/scripts";
import { useBoolean } from "@/shared";
import axios from "axios";
import { useEffect, useState } from "react";
import type { ALGOLIA_STORY } from "../types/first-load-types";

export function useFirstLoad() {
  const [data, setData] = useState<ALGOLIA_STORY[]>([]);
  const [isLoading, { setFalse: stopLoading }] = useBoolean(true);
  useEffect(() => {
    async function fetchData() {
      const {
        data: { hits },
      } = await axios(`${ALGOLIA_URL}?query=react`);
      setData(hits);
      stopLoading();
    }
    fetchData();
  }, [stopLoading]);
  return [data, isLoading] as const;
}
