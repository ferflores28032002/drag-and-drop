import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import ReactDnd from "./ReactDnd";
import Prueba from "./React-grid-layout-between";
import LazyLoading from "./LazyLoading";

const initialTasks = [
  {
    id: "1",
    text: "React",
  },
  {
    id: "2",
    text: "Node",
  },
  {
    id: "3",
    text: "MongoDB",
  },
  {
    id: "4",
    text: "Express",
  },
  {
    id: "5",
    text: "Express",
  },
  {
    id: "6",
    text: "Express",
  },
  {
    id: "7",
    text: "Express",
  },
  {
    id: "8",
    text: "Express",
  },
];

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    // <DragDropContext
    //   onDragEnd={(result: any) => {
    //     const { source, destination } = result;
    //     if (!destination) {
    //       return;
    //     }
    //     if (
    //       source.index === destination.index &&
    //       source.droppableId === destination.droppableId
    //     ) {
    //       return;
    //     }

    //     setTasks((prevTasks) =>
    //       reorder(prevTasks, source.index, destination.index)
    //     );
    //   }}
    // >
    //   <Droppable droppableId="tasks">
    //     {(droppableProvided: any) => (
    //       <ul
    //         {...droppableProvided.droppableProps}
    //         ref={droppableProvided.innerRef}
    //         className="task-container"
    //       >
    //         {tasks.map((task, index) => (
    //           <Draggable key={task.id} draggableId={task.id} index={index}>
    //             {(draggableProvided: any) => (
    //               <li
    //                 {...draggableProvided.draggableProps}
    //                 ref={draggableProvided.innerRef}
    //                 {...draggableProvided.dragHandleProps}
    //                 className="task-item"
    //               >
    //                 {task.text}
    //               </li>
    //             )}
    //           </Draggable>
    //         ))}
    //         {droppableProvided.placeholder}
    //       </ul>
    //     )}
    //   </Droppable>

    // </DragDropContext>

    // <ReactDnd/>
    // <Prueba/>
<LazyLoading/>
    );
}


export default App