import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { Input } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  bgcolor: "background.paper",
  width: 750,
  heigt: "400px",
  boxShadow: 24,
  transform: "translate(-50%, -50%)",
  p:4,
};


const ModalTitle = () => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [overView, setOverView] = useState("");
  const [rate, setRate] = useState("");
  const [skills, setSkills] = useState([]);
  const [img, setImg] = useState("");
  const [navigator, setNavigator] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUDS_API_URL}/personalInformation`
        );
        if (res) {
          setNewTitle(res.data[0].title);
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


  const handleChangeInput = (e) => {
    const { value } = e.target;
    setNewTitle(value);
  };


  const handleUpdateTitle = (e) => {
    e.preventDefault();


    (async () => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_CRUDS_API_URL}/personalInformation/1`,
          {
            title: newTitle,
            overview: overView,
            rate: rate,
            skills: skills,
            image: img,
          }
        );

        if (res) {
          setNavigator(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };


  const DivIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right:-2px;
    top: 0px;
    background-color: #fff;
    width: 15px;
    height: 15px;
    padding: 15px;
    border-radius: 50%;
    border: 1px solid #999;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  `;


  return (
    <div>
      <DivIcon onClick={handleOpen}>
        <EditIcon color="success" />
      </DivIcon>{" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Your Title
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your title: Enter a single sentence description of your professional
            skills/experience (e.g. Expert Web Designer with Ajax experience)
          </Typography>
          <form onSubmit={handleUpdateTitle}>
            <Input
              type="text"
              value={newTitle}
              onChange={handleChangeInput}
              style={{ width: "400px", margin: "10px 0px" }}
            />

            <div style={{ width: "fit-content", marginLeft: "auto" }}>
              <Button type="submit" color="success">save</Button>{" "}
              <Button type="button" onClick={handleClose} color="error">
                cancel
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
      {navigator ? <Navigate to={"/redirect"} /> : ""}
    </div>
  );
};


export default ModalTitle;