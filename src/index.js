import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Main from "./page/main";
import { DragDropContext } from 'react-beautiful-dnd'
import { reorderGroup, reorderTask, moveTask } from './actions'

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.sass";

const store = createStore(rootReducer);

function onDragEnd(result) {
 console.log(result)
 const draggable = result.draggableId.split('-').filter(item => !isNaN(item))[0]
 const { source, destination } = result;

 // dropped outside the list
 if (!destination) {
  return;
 }
 const sInd = source.droppableId;
 const dInd = destination.droppableId;
 console.log(destination, result)
 if (sInd === dInd) {
  if (sInd === "Groups") {
   store.dispatch(reorderGroup(source.index, destination.index));
  } else {
   store.dispatch(reorderTask(source.index, destination.index, +draggable))
  }

 } else {
  let draggable = sInd.split('-').filter(item => !isNaN(item))[0]
  let droppable = dInd.split('-').filter(item => !isNaN(item))[0]
  store.dispatch(moveTask(source.index, destination.index, +draggable, +droppable))
 }
}

document.title = "Todo TestTask"
ReactDOM.render(
 <DragDropContext onDragEnd={onDragEnd} >
  <Provider store={store}>
   <div className="container Page">
    <div className="row">
     <Main />
    </div>
   </div>
  </Provider>
 </DragDropContext>,
 document.getElementById("root")
);
