// Define the interface for each data item
interface DataItem {
    id: number;
    name: string;
    Videosrc?: string;  // Optional because not all items have a Videosrc (e.g., C++ Organize Program)
    VideoID: string;
    src?: string; // Optional, assuming it's only used for the "C++ Organize Program" entry
  }
  
  // Create the data array with the defined type
  const Data: DataItem[] = [
    {
        id: 1,
        name: "E commerce app",
        Videosrc: "https://www.youtube.com/embed/3avFoCahbvk?si=1rKGguicxbcN-p7L",
        VideoID: "3avFoCahbvk",
    },
    {
        id: 2,
        name: "Prayer Times app",
        Videosrc: "https://www.youtube.com/embed/6WbG-fznfMs?si=LB0IrwQjL74NYQpm",
        VideoID: "6WbG-fznfMs",
    },
    {
        id: 3,
        name: "Social Media app",
        Videosrc: "https://www.youtube.com/embed/drwkJowQL2s?si=vqU7GpR_lKhxJxq3",
        VideoID: "drwkJowQL2s",
    },
    {
        id: 4,
        name: "C++ Organize Program",
        src: "", // Empty string for src as the C++ program doesn't use Videosrc
        VideoID: "C++ program to organize folders and files by size or extension",
    },
    {
        id: 5,
        name: "Queue Simulation System",
        Videosrc: "https://www.youtube.com/embed/YSnQfOt5K2w?si=DUsqXtRfOsRkTPJI",
        VideoID: "YSnQfOt5K2w",
    },
    ];
    export default Data;
