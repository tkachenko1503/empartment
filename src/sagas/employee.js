import {call, put} from "redux-saga/effects";
import {push} from "react-router-redux";

import employeeApi from "../api/employees";

// fetch
export function* employeesFetchList() {
  const employees = yield call([employeeApi, employeeApi.getItems]);

  yield put({
    type: 'EMPLOYEE_LIST_RESET',
    employees
  });
}

// add
export function* employeeAdd(action) {
  const employee = yield call([employeeApi, employeeApi.addItem], action.employee);

  yield put({
    type: 'EMPLOYEE_ADD',
    employee
  });

  yield put(push('/employee'));
}

// edit
export function* employeeEdit(action) {
  yield call([employeeApi, employeeApi.editItem], action.employee);

  yield put({
    type: 'EMPLOYEE_EDIT',
    employee: action.employee
  });

  yield put(push('/employee'));
}

// remove
export function* employeeRemove(action) {
  yield call([employeeApi, employeeApi.removeItem], action.employeeId);

  yield put({
    type: 'EMPLOYEE_DELETE',
    employeeId: action.employeeId,
  });
}
