"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date("2026-10-20T23:59:59").getTime();

    const updateCountdown = () => {
      setRemaining(Math.max(0, targetDate - Date.now()));
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted || remaining === null) {
    return (
      <p className="mt-3 text-xl font-medium text-foreground">
        --d --:--:--
      </p>
    );
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <p className="mt-3 text-xl font-medium text-foreground">
      {days}d {hours.toString().padStart(2, "0")}:
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </p>
  );
}