export interface Episode {
  id: string;
  title: string;
  duration: string;
  description: string;
  driveFileId: string; // The Google Drive File ID
}

export const NAVRATRI_EPISODES: Episode[] = [
  {
    id: "ep-1",
    title: "Day 1: Shailaputri Pooja & Ghatasthapana",
    duration: "45 mins",
  
    description: "Kalash setup and Day 1 rituals.",
    driveFileId: "1jhkm01vtA1sd2C3w8DjvXn8q9aKt5m5v", // Your 1st video ID
  },
  {
    id: "ep-2",
    title: "Day 2: Brahmacharini Pooja Vidhi",
    duration: "35 mins",
    description: "Day 2 Vidhi and Mantras.",
    driveFileId: "1p1jES7BhTDUwQzPiwZmId01RfMc7YP9U", // Your 2nd video ID
  },

  {
    id: "ep-3",
    title: "Day 3: Chandraghanta Pooja",
    duration: "40 mins",
    description: "Day 3 ritual guidance.",
    driveFileId: "1j7pNLfe71kgsdPC_tDd5q38x9Dr4hkgx",
  
  },
];