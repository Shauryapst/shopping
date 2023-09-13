const initialState = {
    sliderValue: 0, // Initial value
  };
  
  const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SLIDER_VALUE':
        return { ...state, sliderValue: action.payload };
      default:
        return state;
    }
  };
  
  export default sliderReducer;