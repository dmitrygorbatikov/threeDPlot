import React from "react";
import Plot from "react-plotly.js";

const ThirdPlot: React.FC = () => {
  const getData = (): Plotly.Data[] => {
    const count = 100;
    const xList = Array.from(
      { length: count },
      (_, i) => (i / (count - 1)) * 10,
    );
    const yList = xList.map((x) => Math.sin(x) + Math.random() * 2);

    const result: Plotly.Data = {
      type: "surface",
      z: yList.map((y) => Array.from({ length: count }, () => y)),
      colorscale: "Jet",
    };

    return [result];
  };

  const layout = {
    title: "Volume chart 3",
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

export default ThirdPlot;
