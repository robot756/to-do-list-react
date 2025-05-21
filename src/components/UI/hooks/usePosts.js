import { useMemo } from "react";

export const useSortedPost = (posts, sort) => {
   const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [posts, sort]);

  return sortedPosts
}

export const usePosts = (query, posts, sort) => {
  const sortedPosts = useSortedPost(posts, sort)

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts])

  return sortedAndSearchPosts
}