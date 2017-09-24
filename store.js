import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  posts: [],
};

export const actionTypes = {
  TICK: 'TICK',
  STORE_ALL_POSTS: 'STORE_ALL_POSTS',
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK: {
      return { ...state, lastUpdate: action.ts, light: !state.light };
    }

    case actionTypes.STORE_ALL_POSTS: {
      return { ...state, posts: action.posts };
    }

    default:
      return state;
  }
};

// ACTIONS
export const serverRenderClock = isServer => dispatch =>
  // Server Render Clock
  dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });


export const startClock = () => dispatch =>
  // Start the Clock
  setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 800);

export const initStore = (initialState = exampleInitialState) =>
  // Return default Store
  createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
