import React, { useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../../context/ContextAuthor";

const UploadImg = ({ click }) => {
  const { img, setImg } = useAuthContext();

  useEffect(() => {(async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUDS_API_URL}/personalInformation`
        );
        if (res) {
          setImg(res.data[0].image);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setImg]);

  return <img src={img} alt="profile" onClick={click} />;
};

export default UploadImg;