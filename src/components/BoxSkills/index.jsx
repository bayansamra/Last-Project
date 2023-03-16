import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";


export default function BoxSkills(props) {

  const [skills, setSkills] = useState([]);
  const [choosenSkills, setChoosenSkills] = useState([]);
  const [selectSkills, setSelectSkills] = useState(skills);
  const [img, setImg] = useState("");
  const [overview, setOverView] = useState("");
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [navigator, setNavigator] = useState(false);


  useEffect(() => {(async () => {
      try {
        var res1 = await axios.get(`${process.env.REACT_APP_CRUDS_API_URL}/skills`);
        if (res1.data) {
          setSkills(res1.data);
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUDS_API_URL}/personalInformation/1`
        );

        if (res.data) {
          setChoosenSkills(res.data.skills);
          setTitle(res.data.title);
          setOverView(res.data.overview);
          setRate(res.data.rate);
          setImg(res.data.image);
          const array1 = res1.data;
          const array2 = res.data.skills;
          const results = array1.filter(
            ({ id: id1 }) => !array2.some(({ id: id2 }) => id2 === id1)
          );

          console.log("3", results);
          setSelectSkills(results);

          console.log(results);
        }
      } catch (error) {
        console.log(error);
      }
      
    })();
  }, []);

  const handleUpdateSkills = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.put(`${process.env.REACT_APP_CRUDS_API_URL}/personalInformation/1`,
          {
            rate: rate,
            overview: overview,
            title: title,
            skills: choosenSkills,
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


  return (
    <>
      <Stack sx={{ width: 700, mt: 4 }} spacing={3} >
        <Autocomplete
          freeSolo
          multiple
          id="tags-outlined"
          options={selectSkills}
          getOptionLabel={(option) => option.title}
          onChange={(e, choosenSkills) => {
            e.preventDefault();
            setChoosenSkills(choosenSkills);
          }}

          value={choosenSkills}
          filterSelectedOptions
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option.title}
                {...getTagProps({ index })}
                style={{ background: "#219a10", color: "#fff" }}
              />
            ))
          }
          renderInput={(params) => (
            <TextField {...params} label="Skills" placeholder="Skills" />
          )}
        />

        <form onSubmit={handleUpdateSkills}>
        <div style={{ marginLeft: "auto" , width: "fit-content" }}>
              <Button type="submit" color="success">save</Button>{" "}
              <Button type="button" onClick={props.handleClose} color="error">
                cancel
              </Button>
            </div>
          
        </form>
        {navigator ? <Navigate to={"/redirect"} /> : ""}
      </Stack>
    </>
  );
}