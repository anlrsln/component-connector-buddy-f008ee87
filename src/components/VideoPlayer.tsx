import React from 'react';

interface VideoPlayerProps {
  src?: string;
  className?: string;
}

const VideoPlayer = ({ src, className = "" }: VideoPlayerProps) => {
  // Example video URL - a short demo video
  const defaultVideo = "https://static.videezy.com/system/resources/previews/000/005/529/original/Reaviling_Sjusj%C3%B8en_Ski_Senter.mp4";
  
  return (
    <video 
      className={`w-full h-full object-cover ${className}`}
      autoPlay 
      loop 
      muted 
      playsInline
    >
      <source src={src || defaultVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;