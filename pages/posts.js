import { store } from '../config/redux'
import withRedux from 'next-redux-wrapper'
import Posts from '../containers/Posts'

export default withRedux(store)(Posts)
