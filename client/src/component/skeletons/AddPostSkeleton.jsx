import { Ellipsis, Image } from "lucide-react";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import i18n from "../../utils/i18n";

export default function AddPostSkeleton() {
  const [isDark, setIsDark] = useState(false);
  const [dir, setDir] = useState(i18n.language === "ar" ? "rtl" : "ltr");

  const baseColor = isDark ? "#374151" : "#E5E7EB";
  const highlightColor = isDark ? "#4B5563" : "#F3F4F6";
  return (
    <div dir={dir} className="card-border flex flex-col p-6 bg">
      <div className="flex gap-5 items-center mb-4">
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          circle={true}
          height={48}
          width={48}
        />

        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          borderRadius={6}
          height={30}
          containerClassName="flex-1"
        />
      </div>
      <div className="flex  items-center justify-between">
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          borderRadius={6}
          height={30}
          width={80}
        />

        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          borderRadius={6}
          height={30}
          width={30}
        />
      </div>
    </div>
  );
}
