import  { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function StorySectionSkeleton() {
  const [isDark, setIsDark] = useState(false);

  const baseColor = isDark ? "#1f2937" : "#E5E7EB";
  const highlightColor = isDark ? "#374151" : "#F3F4F6";

  return (
    <div className="flex gap-2 w-full overflow-hidden">
      <div className="flex gap-3 overflow-hidden">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className="shrink-0">
            <Skeleton
              baseColor={baseColor}
              highlightColor={highlightColor}
              height={160}
              width={120}
              borderRadius={4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
