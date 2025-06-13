"use client";
import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface I_Customized_Accordions_Props {
  qaList: Array<{ id: string; title: string; content: string }>;
}

export default function QAList() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const isMobile = useMediaQuery("(max-width:767px)");
  const qaList = [
    {
      id: "1",
      title: "什麼是e儲值/立即儲/即時儲值?",
      content: "<p>這是一個示例問題的回答內容。</p>",
    },
    {
      id: "2",
      title: "如何使用e儲值服務？",
      content: "<p>這是另一個示例問題的回答內容。</p>",
    },
  ];

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {qaList?.map((qa, idx) => {
        const currentPanel = `panel${idx + 1}`;
        const isOpen = expanded === currentPanel;

        return (
          <MuiAccordion
            key={qa.id}
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
                    {qa.title}
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
              <div dangerouslySetInnerHTML={{ __html: qa.content }}></div>
            </MuiAccordionDetails>
          </MuiAccordion>
        );
      })}
    </>
  );
}
