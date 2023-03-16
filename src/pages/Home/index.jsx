import React from "react";
import Header from "../../components/Header";
import TimeStatus from "../../components/TimeStatus";
import LikeJop from "../../components/LikeJop";
import Footer from "./../../components/Footer/index";
import ButtonScroll from "../../components/ButtonScroll";
import LeftBox from "../../components/LeftBox";
import Searchbox from "../../components/SearchBox";
import SearchValues from "./SearchValues";
import { Container } from "../../global/style";


const Home = () => {

  return (
    <>
      <Header />
      <Container>
        <div>
          <TimeStatus />
          <Searchbox width="790px" />
         <SearchValues />
          <LikeJop />
          <ButtonScroll />
        </div>
        <LeftBox /> 
      </Container>
      <Footer />
    </>
  );
};

export default Home;