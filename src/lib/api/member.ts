import { apiClient, TeslaAPIResultData } from "./base";

export enum CouponType {
  預付卡優惠券 = 1,
  其他優惠券 = 2,
}

export const getMemberCoupons: (
  page: number,
  type: CouponType
) => Promise<TeslaAPIResultData<CouponResultData>> = (page, type) => {
  return apiClient.get(
    `/api/tesla-API/member/coupon?page=${page}&page_size=99&type=${type}`
  );
};

export const getMemberInfo: () => Promise<
  TeslaAPIResultData<MemberInfo>
> = () => {
  return apiClient.get(`/api/tesla-API/member/me/info`);
};

export const editMemberInfo: (
  memberData: MemberInfo
) => Promise<TeslaAPIResultData<MemberInfo>> = (memberData) => {
  return apiClient.put(`/api/tesla-API/member/me/info`, memberData);
};

export type MemberInfo = {
  birthday: string;
  contact: string;
  email: string;
  email_notify: number;
  mobile_notify: number;
  nickname?: string;
  nick_name?: string;
  point_sum?: number;
  name?: string | null;
  area?: string | null;
  city?: string | null;
};

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
