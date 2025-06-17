"use client";
import ImageCarousel from "@/components/ui/ImageCarousel";
import { useQuery } from "@tanstack/react-query";
import { getBannerList } from "@/lib/api/common";

export default function BannerSliderSection() {
  const { data } = useQuery({
    queryKey: ["getBannerList"],
    queryFn: () => getBannerList(),
    staleTime: 1000 * 60 * 10,
  });

  return (
    <div className="w-full flex items-center justify-center py-[10px]">
      <ImageCarousel
        imageList={
          data?.result["B1"].map((b) => {
            return {
              src: b.banner_img_phone,
              link: b.link,
              width: 288,
              height: 200,
            };
          }) || []
        }
      />
    </div>
  );
}
