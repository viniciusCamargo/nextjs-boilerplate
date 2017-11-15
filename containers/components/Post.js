import { connect } from 'react-redux'

import { selectPost } from '../Posts/state'
import EventLink from './EventLink'

export const Post = ({ id, title, body, selectPost }) => (
  <div key={id}>
    <h3>
      <EventLink
        url={`/post?id=${id}`}
        asUrl={`/posts/${id}`}
        onClick={() => selectPost({ id, title, body })}>{title}</EventLink>
    </h3>

    <p>{body}</p>
  </div>
)

export default connect(null, { selectPost })(Post)
