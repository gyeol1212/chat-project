import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = e => {
    if (e.target) {
      dispatch(e.target);
    } else {
      dispatch(e);
    }
  };
  return [state, onChange];
}
