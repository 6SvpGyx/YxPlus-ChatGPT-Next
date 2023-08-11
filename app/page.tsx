import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  window.console &&
    console.log(
      "%c技术交流欢迎联系".concat("\nQQ：1606656170", "\nWeChat: bbouo-y"),
      "color: blue",
    );
  return (
    <>
      <Home />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
