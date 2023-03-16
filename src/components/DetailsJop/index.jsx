import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Divider } from "@mui/material";
import { useAuthContext } from "../../context/ContextAuthor";
import CardJob from "../CardJop";
import Loading from "./../Loading/index";

function DetailsJob() {
  const [job, setJob] = useState([]);
  const { loading } = useAuthContext();


  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_CRUDS_API_URL}/jobs`);
        if (res) {
          setJob(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Text>
        Browse jobs that match your experience to a client's hiring preferences.
        Ordered by most relevant.
      </Text>
      {loading ? <Loading /> : <CardJob Jobdetails={job} />}

      <Divider variant="fullWidth" />
    </>
  );
}

export const Text = styled.p`
  color: #001e00;
  margin-bottom: 20px;
  font-size: 14px;
`;

export default DetailsJob;