import {takeLatest} from "redux-saga";
import {fork} from "redux-saga/effects";

import {departmentsFetchList, departmentAdd, departmentEdit, departmentRemove} from './department';
import {employeesFetchList, employeeAdd, employeeEdit, employeeRemove} from './employee';

export function* sagas() {
  yield [
    fork(takeLatest, 'DEPARTMENT_FETCH_REQUEST', departmentsFetchList),
    fork(takeLatest, 'DEPARTMENT_ADD_REQUEST', departmentAdd),
    fork(takeLatest, 'DEPARTMENT_EDIT_REQUEST', departmentEdit),
    fork(takeLatest, 'DEPARTMENT_REMOVE_REQUEST', departmentRemove),

    fork(takeLatest, 'EMPLOYEE_FETCH_REQUEST', employeesFetchList),
    fork(takeLatest, 'EMPLOYEE_ADD_REQUEST', employeeAdd),
    fork(takeLatest, 'EMPLOYEE_EDIT_REQUEST', employeeEdit),
    fork(takeLatest, 'EMPLOYEE_REMOVE_REQUEST', employeeRemove)
  ];
}
