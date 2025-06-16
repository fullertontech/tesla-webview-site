import { apiClient, TeslaAPIResultData } from "./base";

export const getQAList: () => Promise<
  TeslaAPIResultData<QuestionResult>
> = () => {
  return apiClient.get(`/api/tesla-API/common/qalist?language=TC`);
};

type QuestionResult = Array<{
  data_list: Array<{
    answer: string;
    question: string;
  }>;
  question_type: string;
}>;
