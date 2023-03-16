import { useState } from "react";


const AuthorUse = () => {
  const searchValues = JSON.parse(localStorage.getItem("searchValues")) || [];
  const Token = localStorage.getItem("token");


    const [token, setToken] = useState("");
    const [username, setUsername] = useState("");
    const [authorized, setAuthorized] = useState(Token ?true:false);
    const [errors, setErrors] = useState([]);
    const [img, setImg] = useState("");
    const [searchValue, setSearchValue] = useState(searchValues);
    const [loading, setLoading] = useState(false);



  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    setToken("");
    setUsername("");
    setAuthorized(false);
  };

  return {
    authorized,setAuthorized,loading,setLoading,
    errors,setErrors,token,setToken,
    username,setUsername,logout,
    searchValue,setSearchValue,img,setImg,
  };
};


export default AuthorUse;