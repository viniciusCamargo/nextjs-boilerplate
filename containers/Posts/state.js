import { get } from 'axios'

const initialState = {
  post: {},
  fetchError: false,
  error: '',
  isFetching: false,
  hasPosts: false,
  posts: {}
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_POST':
      return { ...state, post: action.post }

    case 'IS_FETCHING':
      return { ...state, isFetching: action.bool }

    case 'ERROR':
      return { ...state, error: action.error }

    case 'FETCHED_POSTS':
      return { ...state, hasPosts: true, posts: action.posts }

    case 'FETCHED_POST':
      return { ...state, hasPost: true, post: action.post }

    default: return state
  }
}

// ACTIONS
export const selectPost = (post) => (dispatch) => dispatch({ type: 'SELECT_POST', post })

// const clearSelectedPost = () => (dispatch) => dispatch({ type: 'CLEAR_SELECTED_POST' })

const setError = (error) => (dispatch) => dispatch({ type: 'ERROR', error })

const isFetching = (bool) => (dispatch) => dispatch({ type: 'IS_FETCHING', bool })

const fetchedPosts = (posts) => (dispatch) => dispatch({ type: 'FETCHED_POSTS', posts })

const fetchedPost = (post) => (dispatch) => dispatch({ type: 'FETCHED_POST', post })

export const fetchPosts = () => async (dispatch) => {
  dispatch(isFetching(true))

  try {
    const { data } = await get('https://jsonplaceholder.typicode.com/posts')

    dispatch(fetchedPosts(data))
    dispatch(isFetching(false))
  } catch (error) {
    console.error(error)
    dispatch(setError(error))
  }
}

export const fetchPost = (id) => async (dispatch) => {
  dispatch(isFetching(true))

  try {
    const { data } = await get(`https://jsonplaceholder.typicode.com/posts/${id}`)

    dispatch(fetchedPost(data))
    dispatch(isFetching(false))
  } catch (error) {
    console.error(error)
    dispatch(setError(error))
  }
}
