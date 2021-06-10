/*
    The initial State is a null user
*/
export const initialState = {
    user : null,
};

/*
    actionType stores all the action that we need to perform 
    on the data layer.
    Here we just need to set User
*/
export const actionTypes = {
    SET_USER : "SET_USER",
}

/*
    state : what data layer looks like
    action : what we try to do on the data layer

    switch(listen to the action type, here setUser)
    when we get the action, we should return what the data layer
    currently looks like and then we should modify the user.
*/
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER : 
            return {
                ...state,
                user : action.user
            }
        default :
            return state;
    }
}

export default reducer;