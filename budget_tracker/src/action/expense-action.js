import uuid from 'uuid/v1';

export const createExpense = (item, cost, categoryID) => {

  return {

    type: 'EXPENSE_CREATE',
    payload: {
      id: uuid(),
      categoryID,
      item,
      cost,
      createdOn: new Date(),
    }
  }
};

export const updateExpense = (expense) => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  }
};

export const destroyExpense = (expense) => {
  return {
    type: 'EXPENSE_DESTROY',
    payload: expense,
  }
};
