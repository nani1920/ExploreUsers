/** @format */

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function UserTabs({ tabId, handleTabId }) {
  return (
    <Tabs
      value={tabId}
      onChange={handleTabId}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Tab label="Company" value="Company" />
      <Tab label="Address" value="Address" />
    </Tabs>
  );
}

export default UserTabs;
