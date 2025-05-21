import React from 'react'
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const PostList = ({ posts, setPosts, title }) => {

  if(!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>
        Посты не найдёны
      </h1>
    )
  }

  const deletePost = (id) => {
    setPosts(posts.filter((pst) => pst.id !== id))
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post) => {
          const nodeRef = React.createRef();

          return (
          <CSSTransition
            key={post.id}
            nodeRef={nodeRef}
            timeout={500}
            classNames="post"
          >
          <PostItem
              post={post}
              ref={nodeRef}
              key={post.id}
              deletePost={deletePost}
          />
          </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  )
}

export default PostList