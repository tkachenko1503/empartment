import omit from 'lodash/omit';
import assign from 'lodash/assign';
import reduce from 'lodash/reduce';

export default function employee(state = {}, action) {
  switch (action.type) {
    case 'EMPLOYEE_LIST_RESET':
      return reduce(action.employees, (acc, empl) => {
        acc[empl.id] = empl;
        return acc;
      }, {});

    case 'EMPLOYEE_ADD':
    case 'EMPLOYEE_EDIT':
      return assign({}, state, {[action.employee.id]: action.employee});


    case 'EMPLOYEE_DELETE':
      return omit(state, [action.employeeId]);

    default:
      return state;
  }
}
