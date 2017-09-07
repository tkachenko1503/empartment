import assert from "assert";
import employee from "../../src/reducers/employee";

describe('Employee reducer', () => {
  describe('EMPLOYEE_LIST_RESET', () => {
    it('should return a list of employees', () => {
      const state = {};
      const action = {
        type: 'EMPLOYEE_LIST_RESET',
        employees: [{
          id: 1,
          firstName: 'First name',
          lastName: 'Last name',
          departmentId: 1
        }]
      };
      const expected = {
        1: {
          id: 1,
          firstName: 'First name',
          lastName: 'Last name',
          departmentId: 1
        }
      };

      assert.deepEqual(
        employee(state, action),
        expected
      );
    });
  });

  describe('EMPLOYEE_ADD', () => {
    it('should return a new employee', () => {
      const state = {
        1: {
          id: 1,
          firstName: 'First name',
          lastName: 'Last name',
          departmentId: 1
        }
      };
      const action = {
        type: 'EMPLOYEE_ADD',
        employee: {
          id: 2,
          firstName: 'First other name',
          lastName: 'Last other name',
          departmentId: 2
        }
      };
      const expected = {
        1: {
          id: 1,
          firstName: 'First name',
          lastName: 'Last name',
          departmentId: 1
        },
        2: {
          id: 2,
          firstName: 'First other name',
          lastName: 'Last other name',
          departmentId: 2
        }
      };

      assert.deepEqual(
        employee(state, action),
        expected
      );
    });
  });

  describe('EMPLOYEE_EDIT', () => {
    it('should return a edited employee', () => {
      const state = {
        1: {
          id: 1,
          firstName: 'First name',
          lastName: 'Last name',
          departmentId: 1
        }
      };
      const action = {
        type: 'EMPLOYEE_EDIT',
        employee: {
          id: 1,
          firstName: 'First edited name',
          lastName: 'Last edited name',
          departmentId: 3
        }
      };
      const expected = {
        1: {
          id: 1,
          firstName: 'First edited name',
          lastName: 'Last edited name',
          departmentId: 3
        }
      };

      assert.deepEqual(
        employee(state, action),
        expected
      );
    });
  });

  describe('EMPLOYEE_DELETE', () => {
    it('should return the employees without the deleted element', () => {
      const state = {
        1: {
          id: 1,
          firstName: 'First name',
          lastName: 'Last name',
          departmentId: 1
        },
        2: {
          id: 1,
          firstName: 'First name',
          lastName: 'Last name',
          departmentId: 3
        }
      };
      const action = {
        type: 'EMPLOYEE_DELETE',
        employeeId: 2
      };
      const expected = {
        1: {
          id: 1,
          firstName: 'First name',
          lastName: 'Last name',
          departmentId: 1
        }
      };

      assert.deepEqual(
        employee(state, action),
        expected
      );
    });
  });
});
