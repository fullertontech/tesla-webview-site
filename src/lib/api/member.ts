import { apiClient } from "./base";

export type CouponData = {
  coupon_code: string;
  coupon_name: string;
  discount_type: number;
  discount_value: number;
  expire_date: string;
  start_date: string;
  status: number;
  use_condition: number;
};

type CouponResultData = {
  coupon_data: Array<CouponData>;
  total_elements: number;
  total_pages: number;
  total_unused: number;
};

type TeslaAPIResultData<T> = {
  code: string;
  message: string;
  result: T;
};

export const getMemberCoupons: (
  page: number,
  type: number
) => Promise<TeslaAPIResultData<CouponResultData>> = (page, type) => {
  return apiClient.get(
    `/api/tesla-API/member/coupon?page=${page}&page_size=99&type=${type}`
  );
};
