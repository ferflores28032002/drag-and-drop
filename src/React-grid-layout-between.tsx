import  { useState } from "react";

import GridLayout from "react-grid-layout-between";
import "react-grid-layout-between/dist/index.css";
import mockData from "./Index";

const data = [
    1,4,5,7,8,8
]

const App = () => {
  const [compactType, setCompactType] = useState("horizontal");
  const [layout] = useState({
    containerWidth: 1200,
    containerHeight: 300,
    calWidth: 175,
    rowHeight: 175,
    col: 6,
    margin: [10, 10],
    containerPadding: [0, 0]
  });
//   const [col, setCol] = useState(layout.col);

//   const changeCompactType = () => {
//     setCompactType(compactType === "horizontal" ? "vertical" : "horizontal");
//   };

//   const onLayoutChange = (layout:any) => {
//     setCol(layout.col);
//   };
  return (
    <div>
      <GridLayout
        groups={mockData}
        // compactType={compactType}
        // layout={layout}
        // onLayoutChange={onLayoutChange}
      />
    </div>
  );
};

export default App;
