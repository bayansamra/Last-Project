import { createContext, useContext } from "react";
import workReducer from "../hook/workReducer";

const WorkContext = createContext(null);


export const useWorkContext = () => {
  return useContext(WorkContext);
};


const WorkProvid = ({ children }) => {
  const work = workReducer();
  return <WorkContext.Provider value={work}>{children}</WorkContext.Provider>;
};


export default WorkProvid;