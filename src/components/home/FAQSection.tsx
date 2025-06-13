import CustomTabs from "@/components/ui/CustomTabs";
import QuestionList from "../faq/QuestionList";
import ContactUs from "../faq/ContactUs";

export default function FAQ() {
  return (
    <div className="w-full flex-col flex items-center justify-center px-[15px]">
      <CustomTabs
        tabs={[
          { label: "常見問題", value: "常見問題", content: <QuestionList /> },
          { label: "聯絡我們", value: "聯絡我們", content: <ContactUs /> },
        ]}
        defaultValue={"常見問題"}
      />
    </div>
  );
}
