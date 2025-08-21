"use client"
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface ResumeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeDialog = ({ isOpen, onClose }: ResumeDialogProps) => {
  const [isPdfLoaded, setIsPdfLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|phone/i.test(userAgent) || window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      // Reset PDF loaded state when dialog opens
      setIsPdfLoaded(false);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative z-10 w-full h-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg shadow-2xl">
        {/* Header with close button - positioned outside iframe */}
        <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200 dark:border-gray-600"
            aria-label="Close resume dialog"
          >
            <IoClose className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          {/* Mobile: Show direct download/redirect options */}
          {isMobile ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Resume PDF</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Mobile browsers have limited PDF support. Choose an option below:</p>
              </div>
              
              <div className="space-y-3 w-full max-w-sm">
                <a 
                  href="/assets/Ashwin_Arora.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Open in New Tab
                </a>
                
                <a 
                  href="/assets/Ashwin_Arora.pdf" 
                  download="Ashwin_Arora_Resume.pdf"
                  className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Download PDF
                </a>
                
                <button
                  onClick={onClose}
                  className="block w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Desktop: Try object tag first for better PDF support */}
              <object
                data="/assets/Ashwin_Arora.pdf"
                type="application/pdf"
                className="w-full h-full min-h-[400px]"
                style={{ minHeight: '400px' }}
                onLoad={() => {
                  console.log('PDF object loaded');
                  setIsPdfLoaded(true);
                }}
                onError={(e) => console.error('PDF object error:', e)}
              >
                {/* Fallback if object tag fails */}
                <iframe
                  src="/assets/Ashwin_Arora.pdf"
                  className="w-full h-full border-0 min-h-[400px]"
                  title="Ashwin Arora Resume"
                  allow="fullscreen"
                  style={{ minHeight: '400px' }}
                  onLoad={() => {
                    console.log('PDF iframe loaded');
                    setIsPdfLoaded(true);
                  }}
                  onError={(e) => console.error('PDF iframe error:', e)}
                />
              </object>
              
              {/* Loading indicator and fallback - only show when PDF is not loaded */}
              {!isPdfLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-gray-900">
                  <div className="mb-4">Loading PDF...</div>
                  <a 
                    href="/assets/Ashwin_Arora.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Open PDF in new tab
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeDialog;
