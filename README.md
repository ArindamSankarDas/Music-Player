# Music Player Project

This project is a web-based music player, built using HTML, CSS, and JavaScript. It provides a user-friendly interface for playing, pausing, and navigating through a playlist of songs. The player supports features such as play/pause, next/previous track, and volume control.

## Features

- **Play/Pause Control**: Users can play and pause the current song.
- **Next/Previous Track**: Navigate through the playlist with ease.
- **Volume Control**: Adjust the volume to your preference.
- **Progress Bar**: Visual representation of the current song's playback progress.
- **Responsive Design**: The player is designed to be responsive, ensuring a consistent look across different devices.

## Getting Started

To run the music player on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in your preferred web browser.

## Adding More Tracks

To add more tracks to the playlist, modify the `musicData` array in the `index.js` file. Each track should be an object with properties for the song's path, display name, cover image, and artist.

Example:

```
let musicData = [
  {
    name: "Memory Reboot",
    artist: "V0J, Narvent",
    image: "./assets/images/memory-reboot.jpg",
    path: "./assets/audio/memory-reboot.mp3",
  },
  {
    name: "The Lost Soul Down",
    artist: "NBSPLV",
    image: "./assets/images/lost-soul.jpeg",
    path: "./assets/audio/the-lost-soul-down.mp3",
  },
  {
    name: "Metamorphosis",
    artist: "Interworld",
    image: "./assets/images/metamorphosis.jpg",
    path: "./assets/audio/metamorphosis.mp3",
  },
];
```

## Customization

The player's appearance can be customized by modifying the CSS files. The main styles are defined in `style.css`, while additional responsive styles are included in other CSS files.

## Acknowledgments

- Inspiration from various music player projects and tutorials.
- Font Awesome for icons.
