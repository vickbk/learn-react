export type TopicChangerProps = {
  formAction: (data: FormData) => void;
  isLoading: boolean;
  topic: string | null;
};
