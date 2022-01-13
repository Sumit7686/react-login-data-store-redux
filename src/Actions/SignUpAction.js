const addUser = (data) => {
    // console.log('data action :::', data);
    return {
        type: "ADD_USER",
        payload: data
    }
}

export default addUser;