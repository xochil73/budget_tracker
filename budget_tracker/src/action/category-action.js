import uuid from 'uuid/v1';

export const createCategory = (title, budget) => {
  console.log('in create category');
  return {

    type: 'CATEGORY_CREATE',
  payload: {
      id: uuid(),
        title,
        budget,
        expenses: [],
        createdOn: new Date(),
  }
  }
};

export const updateCategory = (category) => {
  return {
    type: 'CATEGORY_UPDATE',
  payload: category,
}
};

export const destroyCategory = (category) => {
  return {
    type: 'CATEGORY_DESTROY',
  payload: category,
}
};
