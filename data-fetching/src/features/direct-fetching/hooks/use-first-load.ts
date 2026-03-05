import { ALGOLIA_URL } from "@/app/scripts";
import axios from "axios";
import { useEffect, useState } from "react";
import type { ALGOLIA_STORY } from "../types/first-load-types";

export function useFirstLoad() {
  const [data, setData] = useState<ALGOLIA_STORY[]>([]);
  useEffect(() => {
    async function fetchData() {
      const {
        data: { hits },
      } = await axios(`${ALGOLIA_URL}?query=react`);
      setData(hits);
      console.log(hits);
    }
    fetchData();
  }, []);
  return data;
}
