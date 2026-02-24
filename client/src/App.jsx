import "./App.css";
import PostCard from "./component/postCard/PostCard";
import SideBar from "./component/SideBar/SideBar";
import PostCardSkeleton from "./component/skeletons/PostCardSkeleton";

function App() {
  return (
    <div div className="dark flex">
      <SideBar />
      <div className="flex flex-col justify-center">
        <PostCard />
        <PostCardSkeleton />
      </div>
    </div>
  );
}

export default App;
