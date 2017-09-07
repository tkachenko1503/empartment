import omit from 'lodash/omit';
import assign from 'lodash/assign';
import reduce from 'lodash/reduce';

export default function department(state = {}, action) {
  switch (action.type) {
    case 'DEPARTMENT_LIST_RESET':
      return reduce(action.departments, (acc, dept) => {
        acc[dept.id] = dept;
        return acc;
      }, {});

    case 'DEPARTMENT_ADD':
    case 'DEPARTMENT_EDIT':
      return assign({}, state, {[action.department.id]: action.department});


    case 'DEPARTMENT_DELETE':
      return omit(state, [action.departmentId]);

    default:
      return state;
  }
}
