import React from "react";
import Plot from "react-plotly.js";

const FirstPlot: React.FC = () => {
  const getData = (): Plotly.Data[] => {
    const zList = [];

    for (let i = 0; i < 10; i++) {
      zList.push(
        Array(10)
          .fill(Math.random())
          .map(() => Math.random()),
      );
    }

    const result: Plotly.Data = {
      type: "surface",
      z: zList,
      colorscale: "Jet",
    };

    return [result];
  };

  const layout = {
    title: "Volume chart 1",
    scene: {
      xaxis: { title: "X" },
      yaxis: { title: "Y" },
      zaxis: { title: "Z" },
    },
    width: 800,
    height: 500,
  };

  return <Plot data={getData()} layout={layout} />;
};

export default FirstPlot;
