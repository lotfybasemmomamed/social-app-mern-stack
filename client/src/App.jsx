import "./App.css";
import AddPost from "./component/addpost/AddPost";
import Header from "./component/header/Header";
import AddPostModal from "./component/modals/sideBarModal/addPostModal/AddPostModal";
import SideBarModal from "./component/modals/sideBarModal/SideBarModal";
import PostCard from "./component/postCard/PostCard";
import SideBar from "./component/SideBar/SideBar";
import AddPostSkeleton from "./component/skeletons/AddPostSkeleton";
import PostCardSkeleton from "./component/skeletons/PostCardSkeleton";
import StorySectionSkeleton from "./component/skeletons/StorySectionSkeleton";
import StorySection from "./component/storySection/StorySection";

function App() {
  return (
    <div div className="bg-[#eff2f6]  dark:bg-gray-800 flex  ">
      <Header/>
      {/* <SideBarModal open={true}/> */}
      {/* <AddPostModal/> */}
      <div className="flex flex-col">
        

        <div className="flex">
          {/* <div className="mx-9">
            <SideBar />
          </div> */}
          <div className="flex flex-col justify-center">
            <AddPost />
            <StorySectionSkeleton/>
            <StorySection />
            <AddPostSkeleton />
            <PostCard />
            <PostCardSkeleton />
          </div>
          <div className="mx-9">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
