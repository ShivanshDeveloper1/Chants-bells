
"use client";

import { useState } from "react";

export default function YouTubeVideo() {
  const [playing, setPlaying] = useState(false);
  const videoId = "oEQRtuBvSbo";

  return (
    <section className="w-full overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Video Showcase
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            See the{" "}
            <span className="text-neutral-500">Preview.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7">
            Take a closer look at the video and see the experience
            for yourself. Click below to watch it in action.
          </p>
        </div>

        {/* Video Preview */}
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-2xl bg-neutral-900 p-1.5 shadow-xl shadow-black/10 sm:rounded-3xl sm:p-2">
            <div className="group relative aspect-video w-full overflow-hidden rounded-xl bg-black sm:rounded-2xl">

              {playing ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`}
                  title="Video preview"
                    loading="lazy"

                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play video preview"
                  className="absolute inset-0 h-full w-full cursor-pointer text-left"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt="Video preview thumbnail"
                     loading="lazy"
  decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20 transition duration-300 group-hover:from-black/85" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition duration-300 group-hover:scale-110 group-hover:bg-red-500 sm:h-20 sm:w-20">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1 h-7 w-7 sm:h-9 sm:w-9"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-6 md:p-8">
                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white/70 sm:text-xs">
                        Featured Video
                      </p>
                      <h3 className="text-sm font-semibold text-white sm:text-xl md:text-2xl">
                        See It in Action
                      </h3>
                      <p className="mt-1 text-xs text-white/75 sm:text-sm">
                        Click to watch the full video
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-2.5 py-1.5 text-[10px] font-medium text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs">
                      ▶ YouTube
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-neutral-500 sm:text-sm">
          Press play to explore the full video.
        </p>
      </div>
    </section>
  );
}
