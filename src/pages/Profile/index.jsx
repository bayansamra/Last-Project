import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OverviewModal from "../../components/Modal/OverviewModel";
import ModalRate from "../../components/Modal/ModelRate";
import ModalSkills from "../../components/Modal/ModelSkills";
import ModalTitle from "../../components/Modal/ModelTitle";
import portfolio from "../../assets/images/Portfolio.png";
import Test from "../../assets/images/Test.png";
import Certificate from "../../assets/images/Certificate.png";
import Experiences from "../../assets/images/Experiences.png";
import BoxName from "./BoxName";
import BoxRight from "./BoxRight";
import { Styledskill } from "../../components/CardJop/Skills/style";
import { motion as mt } from "framer-motion";
import {Box,Div,Divc,InfoBox,LeftBox,P,Portfolio,Skills,Span,Testimonials} from "./style";


const Profile = () => {
  const [title, setTilte] = useState("");
  const [overView, setOverView] = useState("");
  const [rate, setRate] = useState("");
  const [img, setImg] = useState("");

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUDS_API_URL}/personalInformation`
        );
        if (res) {
          setTilte(res.data[0].title);
          setOverView(res.data[0].overview);
          setRate(res.data[0].rate);
          setSkills(res.data[0].skills);
          setImg(res.data[0].image);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <mt.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Header />
      <Box>
        <BoxName />
        <p style={{ display: "none" }}>{img}</p>
        <InfoBox>
          <BoxRight />
          <LeftBox>
            <Div>
              <h2>
                {title}
                <ModalTitle />
              </h2>

              <h3>
                ${rate}/hr
                <ModalRate />
              </h3>
            </Div>
            <OverviewModal />
            <p>{overView}</p>
            <Divider />
            <h4>Work History</h4>
            <Span>
              No work yet. Once you start getting hired on Upwork, your work
              with clients will show up here.
            </Span>
            <Divider />
            <h4>Portfolio </h4>
            <Portfolio>
              <img src={portfolio} alt="portfolio" />
              <p>
                Talent who add portfolios to their profile are more likely to
                win work. (+20%)
              </p>
            </Portfolio>
            <Divider />
            <h4>Skills</h4>
            <Skills>
              <ModalSkills />
              {skills.map((item) => (
                <Styledskill key={item.id}>{item.title}</Styledskill>
              ))}
            </Skills>
          </LeftBox>
        </InfoBox>
      </Box>
      <Testimonials>
        <h3>Testimonials</h3>
        <Divc>
          <img src={Test} alt="Test" />
          <p>
            Showcasing client testimonials can strengthen your profile. (+5%)
          </p>
        </Divc>
      </Testimonials>
      <Testimonials>
        <h3>Certifications</h3>
        <Divc>
          <img src={Certificate} alt="Certificate" />
          <P>
            Listing your certifications can help prove your specific knowledge
            or abilities. (+10%) You can add them manually or import them from
            Credly.{" "}
          </P>
        </Divc>
      </Testimonials>{" "}
      <Testimonials>
        <h3>Other Experiences</h3>
        <Divc>
          <img src={Experiences} alt="Experiences" />
          <p>
            Highlighting relevant experiences can boost your visibility in our
            search results. (+5%)
          </p>
        </Divc>
      </Testimonials>
      <Footer />
    </mt.div>
  );
};

export default Profile;