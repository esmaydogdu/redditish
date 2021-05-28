import { SortDropdown, Post, Pagination } from "../../components";
import { usePosts } from "../../contexts";

export const PostsContainer = () => {
  const { filteredPosts } = usePosts();

  return (
    <>
      <SortDropdown />
      {filteredPosts.map((post: any) => (
        <Post key={post.timestamp} {...post} />
      ))}
      <Pagination />
    </>
  );
};
