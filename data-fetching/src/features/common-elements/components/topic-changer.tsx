import type { TopicChangerProps } from "../types";

export const TopicChanger = ({
  formAction,
  isLoading,
  topic,
}: TopicChangerProps) => {
  return (
    <form action={formAction}>
      <fieldset className="space-x-2 flex flex-col gap-4" disabled={isLoading}>
        <label className="grid gap-4 w-full">
          Topic:
          <input
            className="py-1 px-2"
            type="text"
            name="topic"
            placeholder="ex. react"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 disabled:bg-blue-300 text-white px-4 py-1 rounded"
        >
          Fetch
        </button>
      </fieldset>
      {topic && <p>Current topic: {topic}</p>}
    </form>
  );
};
