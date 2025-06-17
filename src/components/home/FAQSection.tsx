import CustomTabs from "@/components/ui/CustomTabs";
import QuestionList from "@/components/faq/QuestionList";
import ContactUs from "@/components/faq/ContactUs";

export default function FAQ({ showTab }: { showTab?: boolean }) {
  return (
    <div className="w-full flex-col flex items-center justify-center px-[15px]">
      <CustomTabs
        tabs={[
          {
            label: "常見問題",
            value: "常見問題",
            content: <QuestionList showTab={showTab} />,
          },
          { label: "聯絡我們", value: "聯絡我們", content: <ContactUs /> },
        ]}
        defaultValue={"常見問題"}
      />
    </div>
  );
}
