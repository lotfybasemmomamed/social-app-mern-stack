import StoryCard from "./storyCard/StoryCard";
import AddStory from "./addStory/AddStory";
import i18n from "../../utils/i18n";
import { useState } from "react";

export default function StorySection() {
    const [dir, setDir] = useState(i18n.language === "ar" ? "rtl" : "ltr");

  return (
    <div dir={dir} className="flex gap-2 w-198 ">
      <AddStory />
      <div className="flex gap-3 overflow-x-auto ">
       {[1, 2, 3, 4,5,6,7,8,1,1].map(() => (
        <StoryCard />
      ))}
      </div>
     
    </div>
  );
}
