import { createContext, useContext, useReducer} from 'react';

/* 
    Helps us to create a sort of a Data Layer where we can push our data 
    into and also pull information from it.
*/
export const StateContext = createContext();

/*
    children is our entire app which is wrapped by the data layer.
    so we are pushing the user details into the data layer and
    we can pull it whenever required.
    we can store any data in here are use it as per our requirement.

    reducer listens to any kind of action we shoot on the data layer, 
    for example setUser

    initialState is the what our data layer look like before we apply any
    changes to it.
*/
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

/* 
    Using this we can access the information
    This is a self defined hook which will pull the info
*/
export const useStateValue = () => useContext(StateContext);