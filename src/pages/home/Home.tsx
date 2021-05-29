import { SubmitLink } from "../../components";
import { PostsContainer } from "../../containers";

export const Home = () => {
  return (
    <div data-testid="home" className="page-wrapper mt-5">
      <SubmitLink />
      <PostsContainer />
    </div>
  );
};
