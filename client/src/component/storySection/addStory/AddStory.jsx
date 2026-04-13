import React from "react";
import i18n from "../../../utils/i18n";
import { storySectionLocalization } from "../localization/storySectionLocalization";
import { useTranslation } from "react-i18next";


i18n.addResourceBundle("en","storysection",storySectionLocalization.en)
i18n.addResourceBundle("ar","storysection",storySectionLocalization.ar)
export default function AddStory() {
  const { i18n, t } = useTranslation("storysection");
  return (
    <div>
      <div className="  bg border-dashed border-2 border-gray-300 dark:border-gray-700 rounded-sm h-36 md:h-40 w-24 md:w-30 flex flex-col justify-center items-center">
        <span className="cursor-pointer rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700  flex justify-center items-center ">
          +
        </span>
        <span className="w-1/2 text-center text-sm text-color">
          {t("add_story")}
        </span>
      </div>
    </div>
  );
}
