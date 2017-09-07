import {call, put} from "redux-saga/effects";
import {push} from "react-router-redux";

import departmentApi from "../api/departments";

// fetch
export function* departmentsFetchList() {
  const departments = yield call([departmentApi, departmentApi.getItems]);

  yield put({
    type: 'DEPARTMENT_LIST_RESET',
    departments
  });
}

// add
export function* departmentAdd(action) {
  const department = yield call([departmentApi, departmentApi.addItem], action.department);

  yield put({
    type: 'DEPARTMENT_ADD',
    department: department,
  });

  yield put(push('/'));
}

// edit
export function* departmentEdit(action) {
  yield call([departmentApi, departmentApi.editItem], action.department);

  yield put({
    type: 'DEPARTMENT_EDIT',
    department: action.department,
  });

  yield put(push('/'));
}

// remove
export function* departmentRemove(action) {
  yield call([departmentApi, departmentApi.removeItem], action.departmentId);

  yield put({
    type: 'DEPARTMENT_DELETE',
    departmentId: action.departmentId,
  });
}
