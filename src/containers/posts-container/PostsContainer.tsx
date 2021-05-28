import { SortDropdown, Post, Pagination } from "../../components";
import { usePosts } from "../../contexts";
import { Post as PostType } from "../../types";

export const PostsContainer = () => {
  const { filteredPosts } = usePosts();

  return (
    <>
      <SortDropdown />
      {filteredPosts.map((post: PostType) => (
        <Post key={post.timestamp} {...post} />
      ))}
      <Pagination />
    </>
  );
};
