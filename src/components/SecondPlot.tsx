import React from "react";
import Plot from "react-plotly.js";

const SecondPlot: React.FC = () => {
  const getData = (): Plotly.Data[] => {
    const rows = 10;
    const cols = 20;
    const zList = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const value =
          (Math.sin((i / rows) * Math.PI) * Math.cos((j / cols) * Math.PI) +
            Math.random() * 0.5) *
          3;
        row.push(value);
      }
      zList.push(row);
    }

    const result: Plotly.Data = {
      type: "surface",
      z: zList,
      colorscale: "Viridis",
    };

    return [result];
  };

  const layout = {
    title: "Volume chart 2",
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

export default SecondPlot;
