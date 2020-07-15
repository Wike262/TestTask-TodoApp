import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import rootReducer from "./reducers";
import "./style/index.sass";
import Main from "./page/main";
import GroupPage from "./page/group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const store = createStore(rootReducer);
document.title = "Todo TestTask"
ReactDOM.render(
 <Provider store={store}>
  <Router>
   <div className="container Page">
    <div className="row">
     <div className="col-4 Group-Container">
      <Main />
     </div>
     <Switch>
      <div className="col-7 Tasks-Container">
       <Route path="/:group" component={props => <GroupPage {...props} />} />
      </div>
     </Switch>
    </div>
   </div>
  </Router>
 </Provider>,
 document.getElementById("root")
);
