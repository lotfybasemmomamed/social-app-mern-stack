import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function PostCardSkeleton() {
  const { i18n } = useTranslation("postcard");
  const [dir, setDir] = useState(i18n.language === "ar" ? "rtl" : "ltr");
  const [isDark, setIsDark] = useState(true);

  const baseColor = isDark ? "#374151" : "#E5E7EB";
  const highlightColor = isDark ? "#4B5563" : "#F3F4F6";
  return (
    <div className="border-[0.5px] rounded-sm border-gray-300 p-4 flex flex-col gap-3 dark:bg-gray-900 dark:border-gray-700 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <Skeleton
            baseColor={baseColor}
            highlightColor={highlightColor}
            circle={true}
            height={48}
            width={48}
          />
          <div className="flex flex-col gap-1">
            <Skeleton
              baseColor={baseColor}
              highlightColor={highlightColor}
              width={160}
              height={18}
            />
            <Skeleton
              baseColor={baseColor}
              highlightColor={highlightColor}
              width={160}
              height={18}
            />
          </div>
        </div>
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          height={30}
          width={30}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          count={3}
          height={12}
        />
      </div>
      <Skeleton
        baseColor={baseColor}
        highlightColor={highlightColor}
        height={200}
        className="rounded-sm"
      />
      <div dir={dir} className="flex justify-between mt-2">
        <div className="flex gap-4">
          <Skeleton
            baseColor={baseColor}
            highlightColor={highlightColor}
            height={24}
            width={70}
          />
          <Skeleton
            baseColor={baseColor}
            highlightColor={highlightColor}
            height={24}
            width={70}
          />
        </div>
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          height={24}
          width={70}
        />
      </div>
    </div>
  );
}
