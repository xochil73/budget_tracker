export default ( state=[], {type, payload}) => {

  switch(type) {
    case 'EXPENSE_CREATE':

      return [...state, payload];
    case 'EXPENSE_UPDATE':
      state.map(currentExpense => {
        if (currentExpense.id === payload.id){
          currentExpense.item = payload.item;
          currentExpense.cost = payload.cost;
        }
        return null;
      });
      return state;
    case 'EXPENSE_DESTROY':
      return state.filter(currentExpense => currentExpense.id !== payload.id);

    default:
      return state;
  }
};