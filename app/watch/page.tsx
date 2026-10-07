"use client";

import { Episode, NAVRATRI_EPISODES } from "@/components/data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WatchPage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const selectedEpisode = NAVRATRI_EPISODES[currentIndex] || NAVRATRI_EPISODES[0];

  const totalEpisodes = NAVRATRI_EPISODES.length;
  const overallProgressPercentage = Math.round(
    ((currentIndex + 1) / totalEpisodes) * 100
  );

  const handleSelectEpisode = (index: number) => {
    if (index >= 0 && index < totalEpisodes) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8 text-foreground selection:bg-gold/30 selection:text-gold">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Top Header Section */}
        <header className="border-b border-border/40 pb-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold tracking-[0.2em] text-gold uppercase backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                Exclusive Access
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Guided Navratri Anushthan
              </h1>
              <p className="mt-1 text-sm text-muted/90 sm:text-base">
                A sacred 9-day guided journey into inner transformation
              </p>
            </div>

            {/* Metadata Pill */}
            <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-surface/40 px-4 py-2.5 text-xs font-medium backdrop-blur-md">
              <span className="text-foreground">{totalEpisodes} Episodes</span>
              <span className="h-1 w-1 rounded-full bg-gold/50" />
              <span className="text-muted">2h 00m</span>
              <span className="h-1 w-1 rounded-full bg-gold/50" />
              <span className="flex items-center gap-1.5 text-gold font-semibold">
                <span>🔒</span> Private
              </span>
            </div>
          </div>
        </header>

        {/* Main Grid: Video Player + Episode Sidebar */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Main Video Area (2 Cols on lg) */}
          <div className="space-y-6 lg:col-span-2">
            
            {/* Video Player Container */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-gold/20">
              
              {/* Top Video Header Overlay */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                    NOW PLAYING • EPISODE 0{currentIndex + 1}
                  </span>
                </div>
              </div>

              {/* Animated Frame Switcher */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedEpisode.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0 overflow-hidden"
                >
                  <iframe
                    src={`https://drive.google.com/file/d/${selectedEpisode.driveFileId}/preview`}
                    className="h-[120%] w-full -mt-[8%] border-0"
                    allow="autoplay"
                    allowFullScreen
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom Shield Overlay */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Video Details & Progress Card */}
            <div className="rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur-md shadow-lg space-y-6">
              
              {/* Episode Header Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-semibold text-gold">
                    Episode {currentIndex + 1} • Day {currentIndex + 1}
                  </span>
                  <span className="text-muted font-medium">
                    {selectedEpisode.duration}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground tracking-tight sm:text-3xl">
                  {selectedEpisode.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  {selectedEpisode.description}
                </p>
              </div>

              <div className="h-px bg-border/40" />

              {/* Overall Course Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-foreground/80 uppercase tracking-wider font-semibold">
                    Your Progress
                  </span>
                  <span className="text-gold font-bold">
                    Episode {currentIndex + 1} of {totalEpisodes} ({overallProgressPercentage}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-surface/80 border border-border/40">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gold/80 to-gold rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${overallProgressPercentage}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <motion.button
                  whileHover={{ scale: currentIndex > 0 ? 1.02 : 1 }}
                  whileTap={{ scale: currentIndex > 0 ? 0.98 : 1 }}
                  onClick={() => handleSelectEpisode(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    currentIndex === 0
                      ? "opacity-40 cursor-not-allowed text-muted border border-border/20"
                      : "bg-surface/80 hover:bg-surface text-foreground border border-border/60 shadow-sm"
                  }`}
                >
                  ← Previous Episode
                </motion.button>

                <motion.button
                  whileHover={{ scale: currentIndex < totalEpisodes - 1 ? 1.02 : 1 }}
                  whileTap={{ scale: currentIndex < totalEpisodes - 1 ? 0.98 : 1 }}
                  onClick={() => handleSelectEpisode(currentIndex + 1)}
                  disabled={currentIndex === totalEpisodes - 1}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    currentIndex === totalEpisodes - 1
                      ? "opacity-40 cursor-not-allowed text-muted border border-border/20"
                      : "bg-gold text-black hover:bg-gold/90 shadow-md shadow-gold/10"
                  }`}
                >
                  Next Episode →
                </motion.button>
              </div>

            </div>
          </div>

          {/* Episode Sidebar Container ("YOUR JOURNEY") */}
          <div className="flex flex-col rounded-2xl border border-border/60 bg-surface/30 p-5 backdrop-blur-md shadow-lg h-fit space-y-4">
            
            {/* Sidebar Title */}
            <div className="flex items-center justify-between border-b border-border/40 pb-3">
              <div>
                <h3 className="font-bold text-foreground text-base tracking-wide">
                  YOUR JOURNEY
                </h3>
                <p className="text-xs text-muted">
                  {totalEpisodes} Episodes • Private Anushthan
                </p>
              </div>
              <span className="text-gold text-xs font-semibold px-2 py-1 rounded-md bg-gold/10 border border-gold/20">
                ✦ Series
              </span>
            </div>

            {/* Cards List */}
            <div className="space-y-3 overflow-y-auto max-h-[580px] pr-1">
              {NAVRATRI_EPISODES.map((ep: Episode, index: number) => {
                const isActive = index === currentIndex;
                const isCompleted = index < currentIndex;

                return (
                  <motion.button
                    key={ep.id}
                    onClick={() => handleSelectEpisode(index)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`group relative flex w-full flex-col gap-2 rounded-xl p-4 text-left transition-all duration-200 border ${
                      isActive
                        ? "border-gold/60 bg-surface/90 text-foreground shadow-lg shadow-gold/5"
                        : "border-border/40 bg-surface/40 hover:bg-surface/70 hover:border-border/80 text-foreground/90"
                    }`}
                  >
                    {/* Active State Background Glow */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBorder"
                        className="absolute inset-0 rounded-xl border-2 border-gold pointer-events-none"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Top Row: Episode Identifier + Icon/Status */}
                    <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider">
                      <span className={isActive ? "text-gold font-bold" : "text-muted"}>
                        {isActive ? "✦ NOW PLAYING" : `EPISODE 0${index + 1}`}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {isCompleted && (
                          <span className="text-emerald-400 font-bold">✓</span>
                        )}
                        {isActive && (
                          <span className="text-gold font-bold">▶</span>
                        )}
                        {!isActive && !isCompleted && (
                          <span className="text-muted/60">🔒</span>
                        )}
                        <span className={isActive ? "text-gold" : "text-muted"}>
                          {ep.duration}
                        </span>
                      </div>
                    </div>

                    {/* Episode Title & Day Info */}
                    <div>
                      <span className="text-[11px] text-muted font-medium block">
                        Day {index + 1}
                      </span>
                      <p className="text-sm font-bold leading-snug text-foreground">
                        {ep.title}
                      </p>
                    </div>

                    {/* Card Progress Bar Indicator */}
                    <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-border/40">
                      <div
                        className={`h-full transition-all duration-300 ${
                          isCompleted
                            ? "bg-emerald-400"
                            : isActive
                            ? "bg-gold"
                            : "bg-transparent"
                        }`}
                        style={{
                          width: isCompleted ? "100%" : isActive ? "65%" : "0%",
                        }}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}