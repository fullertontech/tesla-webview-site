"use client";
import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery } from "@tanstack/react-query";
import { getQAList } from "@/lib/api/common";

export interface I_Customized_Accordions_Props {
  qaList: Array<{ id: string; title: string; content: string }>;
}

const QuestionTypes = ({ questionTypes }: { questionTypes: Array<string> }) => {
  return (
    <div>
      {questionTypes.map((qType, idx) => (
        <div
          className={
            "my-[10px] w-[calc(50%-2px)] py-[14px] text-center rounded-[7.35px] border-[1px] border-[#D3D3D3] inline-block " +
            (idx % 2 == 0 ? "mr-[2px]" : "ml-[2px]")
          }
          key={qType}
        >
          {qType}
        </div>
      ))}
    </div>
  );
};

export default function QAList() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [qaList, setQAList] = React.useState<
    Array<{
      answer: string;
      question: string;
    }>
  >([]);
  const [qaTypes, setQATypes] = React.useState<Array<string>>([]);
  const isMobile = useMediaQuery("(max-width:767px)");
  const { data } = useQuery({
    queryKey: ["qaList"],
    queryFn: () => getQAList(),
    staleTime: 1000 * 60 * 10,
  });

  React.useEffect(() => {
    if (data?.result && data.result.length > 0) {
      setQAList(data?.result[0].data_list);
      setQATypes(data?.result.map((d) => d.question_type));
    }
  }, [data]);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {<QuestionTypes questionTypes={qaTypes} />}
      {qaList?.map((qa, idx) => {
        const currentPanel = `panel${idx + 1}`;
        const isOpen = expanded === currentPanel;

        return (
          <MuiAccordion
            key={idx}
            expanded={isOpen}
            onChange={handleChange(currentPanel)}
            disableGutters
            elevation={0}
            square
            className={`w-full max-w-[1200px] border-b border-[#D3D3D3] font-["Noto_Sans_TC"] ${
              isOpen ? "bg-white" : "bg-transparent"
            }`}
          >
            <MuiAccordionSummary
              aria-controls={`${currentPanel}d-content`}
              id={`${currentPanel}d-header`}
              className="p-0! flex-row-reverse [&>.MuiAccordionSummary-content]:py-5"
              sx={{
                "&::before": {
                  display: "none",
                },
              }}
            >
              <div
                className={`flex w-full justify-between ${
                  isMobile ? "items-start" : "items-center px-4"
                }`}
              >
                <span
                  className={`${
                    isMobile ? "w-[95%]" : "w-full"
                  } text-[22px] md:text-[32px] font-[550] leading-8`}
                >
                  <span className="text-[#00BCD3] mr-[10px]">Q</span>
                  <span
                    className={`${
                      isOpen ? "text-[#00BCD3]" : "text-[#1A1A1A]"
                    }`}
                  >
                    {qa.question}
                  </span>
                </span>
                <div className="text-[28px] leading-[24px]">
                  {isOpen ? "－" : "＋"}
                </div>
              </div>
            </MuiAccordionSummary>
            <MuiAccordionDetails
              className={`${
                isMobile ? "px-4" : "pl-[70px] pr-[80px]"
              } font-medium text-[#1A1A1A] text-[16px] md:text-[20px] ${
                expanded ? "" : "border-t border-[#D3D3D3]"
              }`}
            >
              <div dangerouslySetInnerHTML={{ __html: qa.answer }}></div>
            </MuiAccordionDetails>
          </MuiAccordion>
        );
      })}
    </>
  );
}
