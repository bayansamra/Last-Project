import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BoxSkills from "../BoxSkills";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  bgcolor: "background.paper",
  width: 750,
  borderRadius: "20px",
  boxShadow: 24,
  transform: "translate(-50%, -50%)",
  p:4,
};


const DivIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -50px;
  left: 60px;
  background-color: #fff;
  width: 15px;
  height: 15px;
  padding: 15px;
  border-radius: 50%;
  border: 1px solid #999;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;


const ModalSkills = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
            Edit Skill
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 6, ms: 3 }}>
            <p>Skills</p>
            Keeping your skills up to date helps you get the jobs you want.
          </Typography>
          <BoxSkills handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalSkills;