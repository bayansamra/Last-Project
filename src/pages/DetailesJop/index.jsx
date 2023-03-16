import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import DetailsJobCard from "./DetailsJobCard";
import { Title } from "./style";


const DetailsJob = () => {
  const { id } = useParams();

  const [jobdetails, setJobDetails] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_CRUDS_API_URL}/jobs/${id}`);
        if (res) {
          setJobDetails(res.data);
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <>
      <Header />
      <Title>Job details</Title>
      <DetailsJobCard detail={jobdetails} />
      <Footer />
    </>
  );
};

export default DetailsJob;
