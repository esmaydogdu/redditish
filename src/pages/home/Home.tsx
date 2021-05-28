import { SubmitLink } from "../../components";
import { PostsContainer } from "../../containers";

export const Home = () => {
  return (
    <div className="page-wrapper mt-5">
      <SubmitLink />
      <PostsContainer />
    </div>
  );
};
