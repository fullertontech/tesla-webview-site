import { apiClient, TeslaAPIResultData } from "./base";

export const getBannerList: (
  slots?: string
) => Promise<TeslaAPIResultData<BannerDataResult>> = (slots) => {
  if (!slots) {
    slots = "B1,B2";
  }
  return apiClient.get(`/api/tesla-API/common/banner?slot=${slots}`);
};

export const getQAList: () => Promise<
  TeslaAPIResultData<QuestionResult>
> = () => {
  return apiClient.get(`/api/tesla-API/common/qalist?language=TC`);
};

type BannerDataResult = {
  [slot: string]: Array<{
    subject: string;
    link: string;
    banner_img_pad: string;
    banner_img_phone: string;
    banner_img_web: string;
  }>;
};

type QuestionResult = Array<{
  data_list: Array<{
    answer: string;
    question: string;
  }>;
  question_type: string;
}>;
