type Status = {
  name: string;
  url?: string;
  periode?: {
    start: string;
    end?: string;
  };
};

const STATUS: { [key: string]: Status } = {
  computerScienceBachelor: {
    name: "University of Southern Denmark, SDU",
    url: "https://www.sdu.dk/en/uddannelse/bachelor/datalogi",
    periode: {
      start: "2022",
      end: "2025",
    },
  },
  kmdStudentWorker: {
    name: "KMD A/S",
    url: "https://www.kmd.net/en",
    periode: {
      start: "2023",
    },
  },
};

export default STATUS;