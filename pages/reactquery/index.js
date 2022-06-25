import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";

const usePost = (id) => {
  const { isError, isLoading, data, error } = useQuery(["POSTS", id], () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      (response => response.data)
    );
  }, {retry: false, refetchOnWindowFocus: false});

  return { isError, isLoading, post: data, error: error };
};
const index = () => {
  const { isLoading, post, isError, error } = usePost(101);

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  console.log(post);
  return (
    <>
      <h1>Task # : {post.id}</h1>
      <h3>Title : {post.title}</h3>
      <p>Description : {post.body}</p>
    </>
  );
};

export default index;
