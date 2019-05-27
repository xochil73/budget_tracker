export default ( state=[], {type, payload}) => {

  switch(type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      state.map(currentCategory => {
        if (currentCategory.id === payload.id){
            currentCategory.title = payload.title;
            currentCategory.budget = payload.budget;
        }
        return null;
      });
      return state;
    case 'CATEGORY_DESTROY':
      return state.filter(currentCategory => currentCategory.id !== payload.id);

      default:
      return state;
  }
};