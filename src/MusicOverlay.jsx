import React, { useEffect, useRef, useState } from "react";

const MusicOverlay = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const tryPlay = () => {
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Autoplay blocked. Waiting for user interaction:", err);

            // Optional: wait for user interaction to play
            const onUserInteraction = () => {
              audio.play().then(() => setIsPlaying(true));
              window.removeEventListener("click", onUserInteraction);
            };

            window.addEventListener("click", onUserInteraction);
          });
      }
    };

    tryPlay();
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} loop>
        <source src="/src/DigitalTimelapse.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

<button
  onClick={toggleAudio}
  className="fixed bottom-36 right-2 z-50 transition-all duration-300"
>
  <div className="flex items-center gap-2 transform -rotate-90 origin-bottom-right">
    {/* SOUND Label */}
    <span className="text-[16px] tracking-widest text-neutral-400 font-light">
      SOUND
    </span>

    {/* ON/OFF Toggle */}
    <div className="w-[50px] h-[40px] overflow-hidden relative">
      <div
        className="absolute left-0 top-0 transition-transform duration-300 ease-in-out"
        style={{
          transform: isPlaying ? "translateY(0%)" : "translateY(-50%)",
        }}
      >
        {/* ON */}
        <div className="h-[40px] flex items-center justify-center text-orange-400 text-[16px] leading-[40px] font-light tracking-widest">
          ON
        </div>
        {/* OFF */}
        <div className="h-[40px] flex items-center justify-center text-orange-400 text-[16px] leading-[40px] font-light tracking-widest">
          OFF
        </div>
      </div>
    </div>
  </div>
</button>











    </div>
  );
};

export default MusicOverlay;
