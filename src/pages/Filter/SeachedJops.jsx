import axios from "axios";
import React, { useEffect, useState } from "react";
import CardJob from "../../components/CardJop";


const SearchedJobs = () => {
  const [filterJob, setFilterJob] = useState([]);
  const searchValue = localStorage.getItem("search");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUDS_API_URL}/jobs?title_like=${searchValue}`
        );

        if (res) {
          setFilterJob(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchValue]);

  return <CardJob Jobdetails={filterJob} />;
};


export default SearchedJobs;