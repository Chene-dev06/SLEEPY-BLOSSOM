# A little birthday surprise for Amina 🌸

React + Vite birthday experience with an interactive Blossom character, personalized birthday letter, confetti, and an original gentle piano loop.

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL Vite prints (usually http://localhost:5173).

## Build for hosting
Run `npm run build`. The production website will be in `dist`.

## Customize
- Edit the message in `src/App.jsx` (`birthdayMessage`).
- Replace `public/music/blossom-piano.wav` with your preferred audio, keeping the same filename, or update the audio `src`.
- Blossom's CSS-drawn character is in `src/components/Blossom.jsx` and `src/App.css`.

The included piano loop is an original generated melody. Browsers require user interaction before audio can start, so it begins after Amina presses YES.
