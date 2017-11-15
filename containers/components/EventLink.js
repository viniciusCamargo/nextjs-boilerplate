import Router from 'next/router'

/* <a href={`/posts/${id}`} onClick={(event) => {
  event.preventDefault()

  selectPost({ id, title, body })
  Router.push(`/post?id=${id}`, `/posts/${id}`)
}}>
  {title}
</a> */

const EventLink = ({ url, asUrl, onClick, children }) => (
  <a href={asUrl} onClick={(event) => {
    event.preventDefault()

    onClick()
    Router.push(url, asUrl)
  }}>
    {children}
  </a>
)

export default EventLink
