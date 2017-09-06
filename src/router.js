import React from "react";
import {Router, Route, IndexRoute} from "react-router";

import {history} from "./store.js";
import App from "./components/App";
import Department from "./components/department/Department";
import AddDepartment from "./components/department/AddDepartment";
import EditDepartment from "./components/department/EditDepartment";
import Employee from "./components/employee/Employee";
import AddEmployee from "./components/employee/AddEmployee";
import EditEmployee from "./components/employee/EditEmployee";
import NotFound from "./components/common/NotFound";

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>

      <IndexRoute component={Department}/>
      <Route path="/department/add" component={AddDepartment}/>
      <Route path="/department/:id/edit" component={EditDepartment}/>

      <Route path="employee" component={Employee}/>
      <Route path="/employee/add" component={AddEmployee}/>
      <Route path="/employee/:id/edit" component={EditEmployee}/>

      <Route path="*" component={NotFound}/>

    </Route>
  </Router>
);

export {router};
