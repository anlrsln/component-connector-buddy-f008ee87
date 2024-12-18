import React from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer = ({ src, className = "" }: VideoPlayerProps) => {
  return (
    <video 
      className={`w-full h-full object-cover ${className}`}
      autoPlay 
      loop 
      muted 
      playsInline
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;