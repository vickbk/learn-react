import { ALGOLIA_URL } from "@/app/scripts";
import axios from "axios";
import { useActionState, useState } from "react";

export function useChangeTopic() {
  const [data, setData] = useState([]);
  const [topic, formAction, isLoading] = useActionState(
    async (_: unknown, formData: FormData) => {
      const topic = formData.get("topic") as string;
      const {
        data: { hits },
      } = await axios(`${ALGOLIA_URL}?query=${topic}`);
      setData(hits);
      return topic;
    },
    null,
  );
  return [data, isLoading, formAction, topic] as const;
}
