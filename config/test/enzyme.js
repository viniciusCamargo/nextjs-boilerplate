/**
 * References:
 * @see {@link https://github.com/facebookincubator/create-react-app/issues/3206}
 * @see {@link https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16}
 * @see {@link https://reactjs.org/docs/javascript-environment-requirements.html}
 */

import 'raf/polyfill'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

global.requestAnimationFrame = (callback) => setTimeout(callback, 0)
