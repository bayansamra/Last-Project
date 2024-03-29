import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DetailsJob from "./../DetailsJop/index";
import MostRecent from "../MostRecent";
import SaveJob from "../SaveJob";
import { useWorkContext } from "../../context/WorkContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >

      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const { state } = useWorkContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab label="Best Matches" {...a11yProps(0)} />
          <Tab label="Most Recent" {...a11yProps(1)} />
          <Tab label={`Saved Jobs (${state.count})`} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DetailsJob />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MostRecent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SaveJob />
      </TabPanel>
    </Box>
  );
}