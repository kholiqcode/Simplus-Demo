const initialStateLogin = {
  email: '',
  password: '',
};

const authReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        email: action.value.name,
        password: action.value.password,
      };

    default:
      return {
        ...state,
      };
  }
};

export { authReducer };
