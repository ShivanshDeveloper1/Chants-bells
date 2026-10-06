"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function WatchContent() {
  const searchParams = useSearchParams();
  const fileId = searchParams.get("fileId");

  if (!fileId) {
    return (
      <div className="p-10 text-center text-muted">
        No video specified. Please go back and enter access details.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-2xl font-bold text-foreground">
        Guided Navratri Anushthan
      </h1>

      {/* Embedded Google Drive Video Player */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-xl">
        <iframe
          src={`https://drive.google.com/file/d/${fileId}/preview`}
          className="h-full w-full border-0"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function WatchPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading video player...</div>}>
      <WatchContent />
    </Suspense>
  );
}