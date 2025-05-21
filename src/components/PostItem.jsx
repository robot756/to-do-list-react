import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = React.forwardRef(({ post, deletePost }, ref) => {
  const router = useNavigate();
  return (
    <div ref={ref} className="post">
      <div className="post__content">
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className="post__buttons">
        
        <MyButton 
        onClick={() => {
        router(`/posts/${post.id}`);
         }
        }>
          Открыть
        </MyButton>

        <MyButton onClick={() => deletePost(post.id)}>Удалить</MyButton>
      </div>
    </div>
  );
});

export default PostItem;
