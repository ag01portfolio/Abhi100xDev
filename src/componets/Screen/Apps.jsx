import React from "react";
import FlashList from "../List";
import { dataSet } from "../data";

const Apps = () => {
  return (
    <div>
      <FlashList data={dataSet.Apps} header="Apps" />
    </div>
  );
};

export default Apps;
