import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(<MyComponent />);

function MyComponent() {
  return (
    <main>
      <img src="src/assets/react.svg" alt="React Logo" />
      <h1>Fun Facts about React !</h1>
      <ul>
        <li>🚀 React was developed by Facebook in 2011</li>
        <li>⚛️ It's based on a concept called the Virtual DOM</li>
        <li>🧠 React uses reusable components to build UIs</li>
        <li>🌎 It's used by companies like Instagram, Netflix, and Airbnb</li>
        <li>
          📦 React apps can be bundled with tools like Vite, Webpack, or Parcel
        </li>
        <li>
          🔥 JSX lets you write HTML inside JavaScript (superpower unlocked)
        </li>
      </ul>
    </main>
  );
}
