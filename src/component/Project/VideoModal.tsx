import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { videoDialog } from "./Data";
import { CgCloseO } from "react-icons/cg";

interface IVideoModalProps {
  videoProps: videoDialog;
  onClose: () => void;
}

const VideoModal = ({ videoProps, onClose }: IVideoModalProps) => {
  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);
  const { videoId, timestamps } = videoProps;

  const handleTimestampClick = (time: any) => {
    setCurrentTime(time);
    if (playerRef.current) {
      playerRef.current.seekTo(time);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-4xl rounded-lg bg-white p-6 dark:bg-gray-800">
        <button
          className="absolute -right-5 -top-5 rounded-full p-1 text-gray-800 dark:text-gray-100"
          onClick={onClose}
        >
          <CgCloseO className="size-8 hover:text-red-500" />
        </button>
        <div className="relative mb-4 h-0 overflow-hidden rounded-md pb-[56.25%]">
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/embed/${videoId}?start=${currentTime}`}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            className="absolute left-0 top-0"
          />
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-black dark:text-white">
            Timestamps
          </h2>
          <ul className="flex flex-wrap gap-4">
            {timestamps.map((stamp: any, index: any) => (
              <li
                key={index}
                className="flex cursor-pointer rounded-full border bg-blue-600 px-4 text-xs text-white hover:underline lg:text-lg"
                onClick={() => handleTimestampClick(stamp.timestamp)}
              >
                {stamp.name} -{" "}
                {new Date(stamp.timestamp * 1000).toISOString().substr(14, 5)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
