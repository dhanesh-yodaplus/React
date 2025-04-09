import { createRoot } from "react-dom/client";
import "./index.css";
import Content from "./components/content";
import Head from "./components/head";
import Foot from "./components/footer";

const root = createRoot(document.getElementById("root"));
 
function Page() {
  return (
    <>
      <Head />
      <Content />
      <Foot />
    </>
  );
}

root.render(
  <>
    <Page />
  </>
);
