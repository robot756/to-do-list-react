import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from './UI/hooks/useFetching';
import PostService from './UI/API/PostService';
import MyLoader from './UI/Loader/MyLoader';

const PostIdPages = () => {

  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data)
  });

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data)
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, [])

  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {isLoading
        ? <MyLoader />
        : <div>{post.id}. {post.title}</div>
      }
      <h1>Комментарии</h1>
      {isComLoading
        ? <MyLoader />
        : <div style={{marginTop: 15}}>
            {comments.map((comm) => 
            <div>
              <h5>{comm.email}</h5>
              <h5>{comm.body}</h5>
            </div>
            )}
          </div>
      }
    </div>
  )
}

export default PostIdPages