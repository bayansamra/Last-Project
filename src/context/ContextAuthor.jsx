import React, { createContext, useContext } from "react";
import AuthorUse from "./../hook/AuthorUse";


export const ContextAuthor = createContext(null);
const ContextAuthorProvid = ({ children }) => {
  const auth = AuthorUse();
  return <ContextAuthor.Provider value={auth}>{children}</ContextAuthor.Provider>;
};


export default ContextAuthorProvid;

export const useAuthContext = () => {
  return useContext(ContextAuthor);
};