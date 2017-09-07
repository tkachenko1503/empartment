import assert from "assert";
import department from "../../src/reducers/department";

describe('Department reducer', () => {
  describe('DEPARTMENT_LIST_RESET', () => {
    it('should return a list of departments', () => {
      const state = {};
      const action = {
        type: 'DEPARTMENT_LIST_RESET',
        departments: [{
          id: 1,
          name: 'Some name'
        }]
      };
      const expected = {
        1: {
          id: 1,
          name: 'Some name'
        }
      };

      assert.deepEqual(
        department(state, action),
        expected
      );
    });
  });

  describe('DEPARTMENT_ADD', () => {
    it('should return a new department', () => {
      const state = {
        1: {
          id: 1,
          name: 'Some name'
        }
      };
      const action = {
        type: 'DEPARTMENT_ADD',
        department: {
          id: 2,
          name: 'Some other name'
        }
      };
      const expected = {
        1: {
          id: 1,
          name: 'Some name'
        },
        2: {
          id: 2,
          name: 'Some other name'
        }
      };

      assert.deepEqual(
        department(state, action),
        expected
      );
    });
  });

  describe('DEPARTMENT_EDIT', () => {
    it('should return a edited department', () => {
      const state = {
        1: {
          id: 1,
          name: 'Some name'
        }
      };
      const action = {
        type: 'DEPARTMENT_EDIT',
        department: {
          id: 1,
          name: 'Some other name'
        }
      };
      const expected = {
        1: {
          id: 1,
          name: 'Some other name'
        }
      };

      assert.deepEqual(
        department(state, action),
        expected
      );
    });
  });

  describe('DEPARTMENT_DELETE', () => {
    it('should return the departments without the deleted element', () => {
      const state = {
        1: {
          id: 1,
          name: 'Some name'
        },
        2: {
          id: 2,
          name: 'Some other name'
        }
      };
      const action = {
        type: 'DEPARTMENT_DELETE',
        departmentId: 1
      };
      const expected = {
        2: {
          id: 2,
          name: 'Some other name'
        }
      };

      assert.deepEqual(
        department(state, action),
        expected
      );
    });
  });
});
