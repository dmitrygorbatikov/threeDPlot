import React from "react";
import Plot from "react-plotly.js";
import * as Plotly from "plotly.js";

const ThreeDPlot: React.FC = () => {
  const generateData = (): Plotly.Data[] => {
    const numPoints = 100;

    const xData = Array.from({ length: numPoints }, (_, i) => i * 5);
    const yData = Array.from(
      { length: numPoints },
      () => Math.random() * 20 + 10,
    );
    const zData = Array.from({ length: numPoints }, () => Math.random() * 10);

    return [
      {
        x: xData,
        y: yData,
        z: zData,
        type: "scatter3d",
        mode: "lines",
        line: { color: "blue", width: 2 },
      },
    ];
  };

  const layout = {
    title: "Test task",
    scene: {
      xaxis: { title: "Time" },
      yaxis: { title: "Y" },
      zaxis: { title: "Z" },
    },
    width: 1000,
    height: 800,
  };

  return <Plot data={generateData()} layout={layout} />;
};

const App: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%", margin: "0 auto" }}>
      <ThreeDPlot />
    </div>
  );
};

export default App;
