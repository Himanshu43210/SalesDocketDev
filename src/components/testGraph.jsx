import React from "react";
import DoubleBarGraph from "./common/StatsCard/Graphs/LineBarGraph/DoubleBarGraph";
import { DOUBLE_BAR_GRAPH } from "@/utils/constants";

const testGraph = ({ type, labels, data }) => {
  return (
    <>
      {type === DOUBLE_BAR_GRAPH && (
        <DoubleBarGraph graphLabels={labels} data={data} />
      )}
    </>
  );
};

export default testGraph;
