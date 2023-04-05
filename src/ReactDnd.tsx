import React from "react";
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap
  } from "react-grid-dnd";
   
  export default function ReactDnd() {
    const [items, setItems] = React.useState([1, 2, 3, 4,5,6,7,8,9]); // supply your own state
   
    // target id will only be set if dragging from one dropzone to another.
    function onChange(sourceId:any, sourceIndex:any, targetIndex:any, targetId:any) {
      const nextState = swap(items, sourceIndex, targetIndex);
      setItems(nextState);
    }
   
    return (
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={4}
          rowHeight={100}
          style={{ height: "400px" }}
        >
          {items.map(item => (
            <GridItem key={item}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid blue",
                }}
              >
                {item}
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
    );
  }