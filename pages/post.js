import { store } from '../config/redux'
import withRedux from 'next-redux-wrapper'
import Post from '../containers/Posts/Post'

export default withRedux(store)(Post)
