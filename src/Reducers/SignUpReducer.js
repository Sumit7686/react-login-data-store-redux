const iState = {
  userData: [],
};

export const SignUpReducer = (state = iState, action) => {
  // console.log('reducer actio :::', action);
  switch (action.type) {
    case "ADD_USER":
      //   const arr = state.userData.filter(
      //     (item) =>
      //       item.userName === action.payload.userName ||
      //       item.email === action.payload.email
      //   );
      return {
        // ...state.userData,
        // userData:
        //   arr.length === 0
        //     ? [...state.userData, action.payload]
        //     : [...state.userData],
        userData: [...state.userData, action.payload],
      };
    default:
      return state;
  }
};

// export default SignUpReducer;
