import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


const ButtonScroll = () => {
  const [showButtonScroll, setShowButtonScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleScroll = () => {
    if (window.pageYOffset > 900) {
      setShowButtonScroll(true);
    } else {
      setShowButtonScroll(false);
    }
  };


  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {showButtonScroll && (
        <ScrollTo onClick={handleScrollToTop}>
          <KeyboardArrowUpIcon sx={{ color: "#108a00" }} />
        </ScrollTo>
      )}
    </>
  );
};


const ScrollTo = styled.div`
  position: fixed;
  bottom: 20px;
  right: 60px;
  background-color: #ffffff;
  width: 25px;
  padding: 6px;
  border: 1px solid #108a00;
  border-radius: 14px;
  box-shadow: 0 0 10px 2px rgba(0, 30, 0, 0.15);
  cursor: pointer;
`;

export default ButtonScroll;