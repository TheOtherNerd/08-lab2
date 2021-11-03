import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Grand Circus", thought: "Props are difficult" },
    { title: "React", thought: "Give me the power!" },
    { title: "Beatrice", thought: "I dont know a Beatrice" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const deletePost = (index: number) => {
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const addPost = (post: Post): void => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="SocialPosts">
      <h1>My Thoughts</h1>
      <button onClick={() => setShowForm(true)}>New Thought</button>
      {showForm && <PostForm onSubmit={addPost} setShowForm={setShowForm} />}
      <div>
        <ul>
          {posts.map((post, i) => (
            <PostInList
              key={`${post.title}${i}`}
              post={post}
              index={i}
              onDelete={deletePost}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialPosts;
