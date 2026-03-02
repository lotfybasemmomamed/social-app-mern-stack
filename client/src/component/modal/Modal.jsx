import SideBar from "../SideBar/SideBar";
import { CircleX } from "lucide-react";

export default function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-30"
        onClick={onClose}
      />

      <div className="fixed top-0 left-0 z-40 h-full w-1/2 bg-white card-border">
        <div className="flex justify-end p-4 cursor-pointer hover:text-red-600 dark:hover:text-red-400">
          <CircleX onClick={onClose} />
        </div>

        <SideBar />
      </div>
    </>
  );
}