import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
  index: number;
  onDelete: (index: number) => void;
}

const PostInList = ({ post, onDelete, index }: Props) => {
  return (
    <li className="PostInList">
      <div>
        <h2>{post.title}</h2>
        <p>{post.thought}</p>
        {/* trash image */}
      </div>
    </li>
  );
};

export default PostInList;
