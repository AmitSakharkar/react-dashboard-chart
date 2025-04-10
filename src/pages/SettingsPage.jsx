import React, { useState } from "react";
import {
  Container,
  Tabs,
  Tab,
  TabPanel,
} from "../features/settings/styles/styles";

import EditProfile from "../features/settings/components/EditProfile";
import Preferences from "../features/settings/components/Preference";
import Security from "../features/settings/components/Security";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const renderTab = () => {
    switch (activeTab) {
      case "Edit Profile":
        return <EditProfile />;
      case "Preferences":
        return <Preferences />;
      case "Security":
        return <Security />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Tabs>
        {["Edit Profile", "Preferences", "Security"].map((tab) => (
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>

      <TabPanel>
        {renderTab()}
      </TabPanel>
    </Container>
  );
};

export default Settings;
