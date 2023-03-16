import React from "react";
import { useAuthContext } from "../../context/ContextAuthor";
import { SearchValues } from "./style";

const RecentSearchValues = () => {
  const { searchValue } = useAuthContext();

  return (
    <SearchValues>
      Recent Searches:{" "}
      {searchValue.slice(-3).map((value, index) => (
        <span key={index}> {value} </span>
      ))}
    </SearchValues>
  );
};

export default RecentSearchValues;