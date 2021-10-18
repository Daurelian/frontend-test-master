import React, { useEffect } from "react";
import Filter from "./filter";
import axios from "axios";
const giggi = [];
export default function Filters({ dispatch, filterNumber, setFilterNumber }) {
  useEffect(() => {
    async function filterData() {
      const response = await axios.get("http://localhost:9000/stock");
      if (response.status === 200) {
        // console.log("response", response);
        setFilterNumber(response.data);
      }
    }
    filterData();
  }, []);
  console.log("response", filterNumber);
  return (
    <>
      <Filter dispatch={dispatch} filterNumber={filterNumber} />
    </>
  );
}
