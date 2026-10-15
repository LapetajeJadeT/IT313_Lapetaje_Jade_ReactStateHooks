# IT313 Lab 5: React State & Hooks in Action

## Problem Description
A study-tracking utility screen built with React Native and Expo for laboratory sessions, allowing students to track solved practice problems and elapsed time.

## Approach & Architecture
- **useState**: Manages local component states for solved problem counts (`solved`), stopwatch timing (`seconds`), and running status (`isRunning`).
- **useEffect & Custom Hook (`useStopwatch`)**: Encapsulates stopwatch interval logic with a proper cleanup function using `clearInterval` to prevent memory leaks and timing bugs.
- **Lifting State Up**: Manages shared states within a parent component (`LabScreen`) to keep sibling components (`PracticeTracker` and `Stopwatch`) fully in sync.
- **Conditional Rendering**: Displays a success message ("Great job!") once the solved counter reaches 5, and updates timer status text ("Running..." vs "Paused").

## How to Run in Expo Go
1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the development server: `npx expo start`
4. Scan the QR code using the **Expo Go** app on your mobile device.