import React from "react";
import { Jobs, Title } from "./style";
import BasicTabs from "../../components/TabsJop";

const LikeJob = () => {

  return (
    <Jobs>
      <Title>Jobs you might like</Title>
      <BasicTabs />
    </Jobs>
  );
};

export default LikeJob;