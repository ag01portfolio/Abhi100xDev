import React from "react";
import FlashList from "../List";
import { dataSet } from "../data";

const Games = () => {
  return (
    <div>
      <FlashList data={dataSet.Games} header="Games" />
    </div>
  );
};

export default Games;
