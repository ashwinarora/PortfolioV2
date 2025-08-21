"use client"
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface ResumeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeDialog = ({ isOpen, onClose }: ResumeDialogProps) => {
  // Close dialog on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when dialog is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative z-10 w-full h-full bg-white dark:bg-gray-900">
        {/* Header with close button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Close resume dialog"
          >
            <IoClose className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-full">
          <iframe
            src="/assets/Ashwin_Arora.pdf"
            className="w-full h-full border-0"
            title="Ashwin Arora Resume"
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeDialog;
