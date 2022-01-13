const iState = {
    userData: []
}

export const SignUpReducer = (state=iState, action) => {
    // console.log('reducer actio :::', action);
    switch (action.type){
        case "ADD_USER":
            return {
                // ...state.userData,
                userData: [...state.userData, action.payload]
            };
        default:
            return state;
    }
}

// export default SignUpReducer;