import SinglePost from "./SinglePost";
import "./style.css";
import useInfiniteScroll from "../../helpers/useInfinite";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

const Post = ({ user, setCheckPost }) => {
  const { loading, lastElementRef } = useInfiniteScroll(
    `${import.meta.env.VITE_API_URL}/getAllPosts`
  );

  const { posts } = useSelector((state) => state.Posts);

  return (
    <div className="posts">
      {posts &&
        posts.map((post, index) => {
          if (posts.length === index + 1) {
            return (
              <SinglePost
                key={index}
                post={post}
                user={user}
                setCheckPost={setCheckPost}
                ref={lastElementRef}
              />
            );
          } else {
            return (
              <SinglePost
                key={index}
                post={post}
                user={user}
                setCheckPost={setCheckPost}
              />
            );
          }
        })}
      {loading && <div className="spiner_loader">
              <HashLoader color="#1876f2" />
          </div>}
    </div>
  );
};

export default Post;
