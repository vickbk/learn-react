import { CategoryHolder } from "@/shared/common-layout/components/category-holder";
import { QueryClientProvider } from "@tanstack/react-query";
import { reactQueryClient } from "../scripts";
import { InitialLoading } from "./initial-loading";

export const ReactQueryFetching = () => {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <CategoryHolder title="Data fetching with React Query">
        <InitialLoading />
      </CategoryHolder>
    </QueryClientProvider>
  );
};
