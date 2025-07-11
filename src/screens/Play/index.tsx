import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const videoUrl =
  "https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/11+final+animation_1+-+Copy.mp4";

const VideoPlayer = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => setIsLoading(true);
    const handleLoadedData = () => setIsLoading(false);
    const handleError = () => {
      setError("Failed to load video. Please try again.");
      setIsLoading(false);
    };

    const handleVideoEnd = () => {
      navigate("/result"); // Navigate to root page when video ends
    };

    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);
    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [navigate]);

  return (
    <div className="relative w-full h-auto overflow-hidden bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-red-500 text-center p-4">{error}</div>
        </div>
      )}

      <video
        ref={videoRef}
        className="w-full h-auto max-w-full"
        playsInline
        autoPlay
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export const Play = (): JSX.Element => {
  return (
    <main
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="425:2688"
    >
      <div className="flex flex-col items-center w-full h-full">
        <VideoPlayer />
      </div>
    </main>
  );
};
