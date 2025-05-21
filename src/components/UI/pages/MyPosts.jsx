import React, { useEffect, useState, useRef } from "react";
import PostList from "../../PostList";
import PostForm from "../../PostForm";
import PostFilter from "../../PostFilter";
import MyModal from "../../../components/UI/modal/MyModal";
import MyButton from "../../../components/UI/button/MyButton";
import { usePosts } from "../../../components/UI/hooks/usePosts";
import PostService from "../../../components/UI/API/PostService";
import MyLoader from "../../../components/UI/Loader/MyLoader";
import { useFetching } from "../../../components/UI/hooks/useFetching";
import { getPageCount } from "../../../utils/pages";
import MyPagination from "../pagination/MyPagination";
import { useObserver } from "../hooks/useObserver";
import { MySelectAmount } from "../select/MySelectAmount";


function MyPosts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(filter.query, posts, filter.sort);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();


  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = (response.headers['x-total-count']);
    setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect( () => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
  };

  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      <MyButton style={{ marginBottom: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter setFilter={setFilter} value={filter} />
      <MySelectAmount
      defaultValue="Кол-во элементов на странице"
      options={[
        { value: 5, name: '5' },
        { value: 10, name: '10' },
        { value: 25, name: '25' },
        { value: -1, name: 'Показать все' },
      ]}
      value={limit}
      onChange={setLimit}
      />
      {postError &&
        <h1>Произошла ошибка {postError}</h1>
      }
      <PostList posts={sortedAndSearchedPosts} setPosts={setPosts} title="Посты про программирование" />
      <div ref={lastElement} style={{height: 20, background:'red'}}></div>
      {isPostsLoading && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}><MyLoader /></div>}
      <MyPagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />

    </div>
  );
}

export default MyPosts;
