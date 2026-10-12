
export interface Episode {
  id: string;
  title: string;
  duration: string;
  // description: string;
  driveFileId: string; // The Google Drive File ID
}

export const NAVRATRI_EPISODES: Episode[] = [
  {
    id: "ep-1",
    title: "Day 1: Welcome & Introduction",
    duration: "36 sec",
    driveFileId: "1xYN5yfZeadgyGo1kCfwgSM1ZeuuNttYq", // Your 1st video ID
  },
  {
    id: "ep-2",
    title: "Day 2: Preparations & Samagri",
    duration: "13 mins",
    // description: "Day 2 Vidhi and Mantras.",
    driveFileId: "1QP-Azq1Ss611xm_1vmF7jIV0YFRESpqo", // Your 2nd video ID
  },

  {
    id: "ep-3",
    title: "Day 3: Ghatsthapna & Poojan",
    duration: "15 mins",
    // description: "Day 3 ritual guidance.",
    driveFileId: "1tyHWaGQxiMYMfAzwVIvpBpKDd2HZqI92",
  },
  {
    id: "ep-4",
    title: "Day 4: Daily Pooja",
    duration: "1 hr 28 mins",
    driveFileId: "1BW1YW5-FFZSf99h9v0sWwxT-dAYNrqBg",
  },
  {
    id: "ep-5",
    title: "Day 5: Devi Abhishek",
    duration: "1 hr 15 mins",
    driveFileId: "10QIGQXIGS3DcP3n9jfbH9sE3eFN_ytYv",
  },
  {
    id: "ep-6",
    title: "Day 6: Arti & Bhog",
    duration: "1 hr",
    driveFileId: "10KOQdtTcnduLnNU_hW-eaR2CXgGKcKi3",
  },
  {
    id: "ep-7",
    title: "Day 7: Durga Saptshati Paath",
    duration: "1 hr",
    driveFileId: "1S33DFqDJ9migPgmQojBZwc5f-n3obVJ3",
  },
];
