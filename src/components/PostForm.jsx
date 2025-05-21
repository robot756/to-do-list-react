import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

export const PostForm = ({create}) => {

  const [post, setPost] = useState({title:'', body: ''})

  const addNewPost = (evt) => {
    evt.preventDefault()
    const newPost = {
      ...post,
      id: Date.now()
    };
    create(newPost);
    setPost({title: '', body: ''})
  }

  return (
    <form action="">

      <MyInput
      value={post.title}
      type="text"
      placeholder="Название"
      onChange={(e) => setPost({ ...post, title: e.target.value })}
      />

      <MyInput
      value={post.body}
      type="text"
      placeholder="Описание"
      onChange={(e) => setPost({ ...post, body: e.target.value })}
      />

      <MyButton onClick={addNewPost}>
        Создать пост
      </MyButton>

    </form>
  );
};

export default PostForm


