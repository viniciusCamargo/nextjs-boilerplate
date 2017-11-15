import { store } from '../config/redux'
import withRedux from 'next-redux-wrapper'
import Home from '../containers/Home'

export default withRedux(store)(Home)
