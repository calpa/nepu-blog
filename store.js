import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import moment from 'moment';

import { getPosts } from './api';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  posts: [],
};

export const actionTypes = {
  TICK: 'TICK',
  STORE_ALL_POSTS: 'STORE_ALL_POSTS',
  GET_ALL_POSTS: 'GET_ALL_POSTS',
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

    case actionTypes.GET_ALL_POSTS: {
      const posts = action.data.items.map((item) => {
        if (item.sys.contentType.sys.id !== 'about') {
          const { title, tags, url, createdDate } = item.fields;

          const date = moment(createdDate).format('MMMM Do YYYY, h:mm a');
          const urlDate = moment(createdDate).format('YYYY/MM/DD');
          return {
            title,
            tags,
            url,
            urlDate,
            createdDate: date,
            id: item.sys.id,
          };
        }

        return {
          title: '關於我',
          tags: 'calpa',
          id: item.sys.id,
          url: 'about',
          urlDate: moment().format('MMMM Do YYYY, h:mm a'),
          createdDate: item.sys.createdDate,
        };
      }, []);

      return { ...state, posts };
    }

    default:
      return state;
  }
};

// ACTIONS
export const getAllPosts = () => async (dispatch) => {
  const res = await getPosts();
  const { data } = res;
  dispatch({ type: actionTypes.GET_ALL_POSTS, data });
};


export const serverRenderClock = isServer => dispatch =>
  // Server Render Clock
  dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });


export const startClock = () => dispatch =>
  // Start the Clock
  setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 800);

export const initStore = (initialState = exampleInitialState) =>
  // Return default Store
  createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
