import FAQ from "@/components/home/FAQSection";

export default function ConsumerServicePage() {
  return (
    <div className="mx-[auto] ">
      <h1 className="ml-[15px] text-[20px] text-[#4D4D4D] font-bold mt-[16px] mb-[16px]">
        客服中心
      </h1>
      <FAQ showTab />
    </div>
  );
}
