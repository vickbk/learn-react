import { EffectFetching } from "@/features/direct-fetching/components/effect-fetching";
import { ReactQueryFetching } from "@/features/react-query/components/react-query-fetching";

export const MainContent = () => {
  return (
    <main>
      <h1>Data fetching techniques</h1>
      <ReactQueryFetching />
      <EffectFetching />
    </main>
  );
};
