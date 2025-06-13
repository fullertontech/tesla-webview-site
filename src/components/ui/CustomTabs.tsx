"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

type TabItem = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type CustomTabsProps = {
  tabs: TabItem[];
  defaultValue?: string;
};

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, defaultValue }) => {
  const [value, setValue] = React.useState(
    defaultValue || tabs[0]?.value || ""
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        ".MuiTabs-indicator": {
          backgroundColor: "#A7EB18",
          height: "3px",
        },
        ".css-1usuzwp-MuiButtonBase-root-MuiTab-root.Mui-selected": {
          color: "#1A1A1A",
          fontWeight: 500,
          fontSize: "14px",
        },
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="custom tabs">
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab) => (
          <TabPanel key={tab.value} value={tab.value} className="p-0!">
            {tab.content}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default CustomTabs;
