import React, { createContext, useReducer, useContext } from 'react';
// import axios from 'axios';
import {
  createAsyncDispatcher,
  createAsyncHandler,
  initialAsyncState
} from './asyncActionUtils';
import * as api from './api'; 

// const initialState = {
//   users: {
//     loading: false,
//     data: null,
//     error: null
//   },
//   user: {
//     loading: false,
//     data: null,
//     error: null
//   }
// };

// const loadingState = {
//   loading: true,
//   data: null,
//   error: null
// };

// const success = (data) => ({
//   loading: false,
//   data,
//   error: null
// });

// const error = (error) => ({
//   loading: false,
//   data: null,
//   error: error
// });

const initialState = {
  users: initialAsyncState,
  user: initialAsyncState
};

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

// function usersReducer(state, action) {
//   switch (action.type) {
//     case 'GET_USERS':
//       return {
//         ...state,
//         users: loadingState
//       };
//     case 'GET_USERS_SUCCESS':
//       return {
//         ...state,
//         users: success(action.data)
//       };
//     case 'GET_USERS_ERROR':
//       return {
//         ...state,
//         users: error(action.error)
//       };
//     case 'GET_USER':
//       return {
//         ...state,
//         user: loadingState
//       };
//     case 'GET_USER_SUCCESS':
//       return {
//         ...state,
//         user: success(action.data)
//       };
//     case 'GET_USER_ERROR':
//       return {
//         ...state,
//         user: error(action.error)
//       };
//     default:
//       throw new Error(`Unhanded action type: ${action.type}`);
//   }
// }
function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
    case 'GET_USERS_SUCCESS':
    case 'GET_USERS_ERROR':
      return usersHandler(state, action);
    case 'GET_USER':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':
      return userHandler(state, action);
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const UsersStateContext = createContext();
const UsersDispatchContext = createContext();

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}

// export async function getUsers(dispatch) {
//   dispatch({ type: 'GET_USERS' });
//   try {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//     dispatch({ type: 'GET_USERS_SUCCESS', data: response.data });
//   } catch (e) {
//     dispatch({ type: 'GET_USERS_ERROR', error: e });
//   }
// }

// export async function getUser(dispatch, id) {
//   dispatch({ type: 'GET_USER' });
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     dispatch({ type: 'GET_USER_SUCCESS', data: response.data });
//   } catch (e) {
//     dispatch({ type: 'GET_USER_ERROR', error: e });
//   }
// }

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);
