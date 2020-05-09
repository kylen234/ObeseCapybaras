import * as types from './';

export const employeeDetailsAction = (details) => {
    return {
        type: types.FETCH_EMPLOYEE_DETAILS,
        details
    }
};

export const employeeUpdateAction = (details) => {
    return {
        type: types.UPDATE_EMPLOYEE_DETAILS,
        details
    }
};

export const employeesListAction = (data) => {
    return {
        type: types.FETCH_EMPLOYEES,
        data
    }
};

export const searchEmployeeAction = (search) => {
    return {
        type: types.SEARCH_EMPLOYEE,
        search
    }
};
