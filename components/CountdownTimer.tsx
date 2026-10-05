"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("2026-12-25T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft <= 0) {
    return <p className="mt-3 text-xl font-medium text-foreground">00:00:00</p>;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (timeLeft / (1000 * 60)) % 60
  );
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <p className="mt-3 text-xl font-medium text-foreground">
      {days}d {hours.toString().padStart(2, "0")}:
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </p>
  );
}