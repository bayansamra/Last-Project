import React, { useState } from "react";
import { Div, Openjob, StyledLink } from "./style";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Drawer from "@mui/material/Drawer";
import DetailsJobCard from "./../../../pages/DetailesJop/DetailsJobCard/index";


export default function TemporaryDrawer(props) {
  const [state, setState] = useState({
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }


    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: 1110, padding: "50px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Openjob>
        <ArrowBackIosNewIcon />
        <StyledLink to={"/JobDetails/" + props.detail.id}>
          <OpenInNewIcon style={{ verticalAlign: "middle", width: "19px" }} />
          Open job in a new window
        </StyledLink>
      </Openjob>
      <DetailsJobCard detail={props.detail} />
    </Box>
  );


  return (
    <div>
      <React.Fragment key={"right"}>
        <Div onClick={toggleDrawer("right", true)}>{props.children}</Div>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
    
  );
}