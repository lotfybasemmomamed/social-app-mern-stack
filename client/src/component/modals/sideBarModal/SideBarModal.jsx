import SideBar from "../../SideBar/SideBar";
import { CircleX } from "lucide-react";

export default function SideBarModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-30" onClick={onClose} />

      <div className="fixed top-0 left-0 z-40 h-full w-1/2 bg card-border ">
        <div className="flex justify-end p-4 cursor-pointer dark:text-white hover:text-red-600 dark:hover:text-red-400">
          <CircleX onClick={onClose} />
        </div>

        <SideBar />
      </div>
    </>
  );
}
