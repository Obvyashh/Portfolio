"use client";

import * as React from "react";
import { Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../utils/classNames";

interface HeroIntroVideoProps {
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
}

export function HeroIntroVideo({
  videoSrc,
  posterSrc,
  className,
}: HeroIntroVideoProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current && videoSrc) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      // Placeholder behavior if no video is provided yet
      alert("Cinematic video will play here once generated!");
    }
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-xl",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_25px_90px_-40px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {/* Aspect Ratio Container (16:9) */}
      <div className="relative aspect-video w-full bg-gradient-to-br from-black/80 to-cyan-950/30">
        
        {/* Video Element */}
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            className="absolute inset-0 h-full w-full object-cover"
            playsInline
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
        )}

        {/* Placeholder / Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <motion.button
              onClick={handlePlay}
              className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200 backdrop-blur-md border border-cyan-400/30 transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping opacity-20" />
              <Play className="h-8 w-8 translate-x-0.5 fill-cyan-200 transition-transform group-hover:scale-110" />
            </motion.button>
            
            {!videoSrc && (
              <div className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span>Cinematic Intro Placeholder</span>
              </div>
            )}
          </div>
        )}

        {/* Cinematic Borders */}
        <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10" />
        <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-cyan-500/10 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-purple-500/10 blur-[80px]" />
      </div>
    </div>
  );
}
