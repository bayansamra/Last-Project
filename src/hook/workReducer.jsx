import { useReducer } from "react";


const worksSaved=JSON.parse(localStorage.getItem("worksSaved")) || [] ;

const initialState = {
     works:worksSaved,
     count: parseInt(localStorage.getItem("count")) || 0 ,
     };
 

const ACTIONS = {
  SAVE_WORK: "addToSaved",
  UN_SAVE_WORK: "removeFromSaved",
};


const Reduce = (state, action) => {
  switch (action.type) {

    case ACTIONS.SAVE_WORK:
      return {
        ...state,
        works: [...state.works, action.payload],
        count: state.count + 1,
      };

    case ACTIONS.UN_SAVE_WORK:
      return {
        ...state,
        works: state.works.filter((work) => work.id !== action.payload),
        count: state.count - 1,
      };

    default:
      return state;
  }
};


const useWork = () => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  const addToSaved = (work) =>
    dispatch({ type: ACTIONS.SAVE_WORK, payload: work });

  const removeFromSaved = (workId) =>
    dispatch({ type: ACTIONS.UN_SAVE_WORK, payload: workId });

  return {
    state,addToSaved,removeFromSaved,
  };
};


export default useWork;