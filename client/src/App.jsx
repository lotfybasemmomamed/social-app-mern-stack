import "./App.css";
import Modal from "./component/modal/Modal";
import PostCard from "./component/postCard/PostCard";
import SideBar from "./component/SideBar/SideBar";
import PostCardSkeleton from "./component/skeletons/PostCardSkeleton";

function App() {
  return (
    <div div className="bg-[#eff2f6] dark:bg-gray-700 flex dark">
      {/* <Modal open={true}/> */}
      <div className="mx-9">

      <SideBar />
      </div>
      <div className="flex flex-col justify-center">
        <PostCard />
        <PostCardSkeleton />
      </div>
    </div>
  );
}

export default App;
