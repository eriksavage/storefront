//where my categories reducer should live

const intialState = {
  categories: [
    { normalizedName: 'electronics', displayName: 'ELECTRONICS', description: 'We Buy And Sell Goods' },
    { normalizedName: 'food', displayName: 'FOOD', description: 'No Food For You!' },
  ],
  selected: null,
}

const categoryReducer = (state = intialState, action) => {
  let { type, payload } = action;
  console.log("IN CATEGORY REDUCER");
  switch (type) {
    case 'ADD_CATEGORY':
      return { ...state, categories: [...state.categories, payload] }
    case 'SELECT_CATEGORY':
      console.log('clicked');
      console.log('PAYLOAD', payload);
      return { ...state, selected: payload }
    default:
      return state
  }
}

export const addCategory = (category) => {
  return {
    type: 'ADD_CATEGORY',
    payload: category
  }
}

export const selectCategory = (category) => {
  console.log('testing');
  return {
    type: 'SELECT_CATEGORY',
    payload: category
  }
}

export default categoryReducer;