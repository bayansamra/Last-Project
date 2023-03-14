import React, { createContext, useContext } from "react";
import authorUse from './../hook/authorUse';


export const ContextAuthor = createContext(null);
const ContextAuthorProvid = ({ children }) => {
  const auth = authorUse();
  return <ContextAuthor.Provider value={auth}>{children}</ContextAuthor.Provider>;
};


export default ContextAuthorProvid;

export const useAuthContext = () => {
  return useContext(ContextAuthor);
};