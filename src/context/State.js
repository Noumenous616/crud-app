import React, {useReducer, createContext} from 'react';
import AppReducer from './AppReducer';
import {v4 as uuid} from 'uuid';

// Initial State

const InitialState = {
    users: []

}

// Create context

export const GlobalContext = createContext(InitialState)

// Provider Component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState)

    // Actions
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }

    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    // Actions

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}